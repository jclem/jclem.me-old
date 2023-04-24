#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const summaries = require('../summaries.json')

const postFilePaths = fs.readdirSync('posts')

main()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

async function main() {
  const newSummaries = await Promise.all(
    postFilePaths.map(async (postFilePath) => {
      const post = fs.readFileSync(`posts/${postFilePath}`).toString('utf8')
      const prompt = `
You are a copywriter tasked with providing single-paragraph descriptions of blog
posts. Given the following blog post title and content, generate a
single-paragraph summary of it.

The author of each blog post is Jonathan Clem, a male whose pronouns are he/him.

${post}`.trim()

      const promptHash = Buffer.from(prompt).toString('base64').slice(0, 64)
      const contentHash = Buffer.from(post).toString('base64').slice(0, 64)

      const existingSummary = summaries.find(
        (summary) =>
          summary.path === postFilePath &&
          summary.contentHash === contentHash &&
          summary.promptHash === promptHash
      )

      if (existingSummary) {
        console.log('Using cached summary for', postFilePath)
        return existingSummary
      }

      console.log('Generating summary for', postFilePath)

      const resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4',
          temperature: 0,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ]
        })
      })

      if (!resp.ok) {
        throw new Error(
          `Failed to fetch OpenAI API: ${resp.statusText} ${await resp.text()}`
        )
      }

      const json = await resp.json()

      return {
        path: postFilePath,
        summary: json.choices.at(0).message.content,
        promptHash,
        contentHash
      }
    })
  )

  fs.writeFileSync('summaries.json', JSON.stringify(newSummaries, null, '\t'))
}
