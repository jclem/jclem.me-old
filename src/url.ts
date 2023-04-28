export const siteDomain =
  process.env.SITE_DOMAIN ?? process.env.VERCEL_URL ?? 'localhost:3000'
export const siteURL =
  process.env.VERCEL_ENV === 'development'
    ? `http://${siteDomain}`
    : `https://${siteDomain}`

export function getURL(path = '') {
  return `${siteURL}${path}`
}
