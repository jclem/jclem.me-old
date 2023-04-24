import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'
import jclemImage from '../../public/images/jclem.webp'

const IndexPage: FC = () => {
  return (
    <main className="flex flex-col gap-6">
      <header className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Image
            src={jclemImage}
            alt="Photograph of Jonathan Clem"
            className="h-12 w-12 rounded-full"
          />
          <h1>Jonathan Clem</h1>
        </div>

        <dl className="defn-list">
          <dt>Occupation</dt>
          <dd>Software Engineer</dd>

          <dt>Employer</dt>
          <dd>
            <a href="https://www.github.com">GitHub</a>
          </dd>

          <dt>Title</dt>
          <dd>Principal Software Engineer</dd>

          <dt>Location</dt>
          <dd>
            <a href="https://www.openstreetmap.org/relation/9691750">
              Brooklyn, New York
            </a>
          </dd>

          <dt>Twitter</dt>
          <dd>
            <a href="https://twitter.com/jclem" title="Twitter profile">
              @jclem
            </a>
          </dd>

          <dt>GitHub</dt>
          <dd>
            <a href="https://github.com/jclem" title="GitHub profile">
              jclem
            </a>
          </dd>

          <dt>Mastodon</dt>
          <dd>
            <a
              rel="me"
              href="https://hachyderm.io/@jtc"
              title="Mastodon profile"
            >
              @jtc@hachyderm.io
            </a>
          </dd>
        </dl>
      </header>

      <article className="article">
        <p>
          Hello, I&apos;m Jonathan. I live in Brooklyn, New York with my
          wonderful wife,{' '}
          <a
            href="https://www.amandajbarlow.com"
            title="Website of Amanda Barlow"
          >
            Amanda
          </a>
          . I&apos;m a Principal Software Engineer at{' '}
          <a
            href="https://github.com/jclem"
            title="Jonathan Clem GitHub Profile"
          >
            GitHub
          </a>
          . Current, I&apos;m working on some new investments for GitHub.
          Previously, I&apos;ve worked at GitHub on things like foundational UI
          work,{' '}
          <a
            href="https://github.com/features/actions"
            title="GitHub Actions feature home page"
          >
            Actions
          </a>
          , and{' '}
          <a
            href="https://github.com/features/issues"
            title="GitHub Issues feature home page"
          >
            Projects
          </a>
          .
        </p>

        <p>
          Prior to GitHub, I worked on infrastructure for{' '}
          <a
            href="https://en.wikipedia.org/wiki/Dropbox_Paper"
            title="Wikipedia article about Dropbox Paper"
          >
            Dropbox Paper
          </a>
          , where I spent a surprising amount of time focused on web performance
          in the browser. Prior to that, I co-founded a company called Canvas,
          which was a collaborative editor for teams. At Canvas, I learned a
          great deal about building and leading engineering teams, but I also
          developed a strong interest in the technologies that power
          collaboration software, such as operational transformation and
          conflict-free replicated data types.
        </p>

        <p>
          Before founding Canvas, my first serious job in the technology
          industry was at{' '}
          <a
            href="https://en.wikipedia.org/wiki/Heroku"
            title="Wikpedia article about Heroku"
          >
            Heroku
          </a>
          , where I was a member of the web apps team. In particular, I&apos;m
          proud of having lead the drive to rewrite the Heroku Dashboard Rails
          application into a nimbler, faster, Node.js-backend Ember.js-frontend
          application.
        </p>

        <p>
          I do not tend to write much, but you can see my posts in the{' '}
          <Link href="/writing">writing archive</Link>.
        </p>
      </article>
    </main>
  )
}

export default IndexPage
