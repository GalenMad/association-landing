import { readFileSync, writeFileSync } from 'node:fs'

const filePath = 'content/index.yml'

const replacements = {
  __TBANK_DONATION_URL__: process.env.TBANK_DONATION_URL
}

let content = readFileSync(filePath, 'utf8')

for (const [placeholder, value] of Object.entries(replacements)) {
  if (!value) {
    throw new Error(`Missing env variable for ${placeholder}`)
  }

  content = content.replaceAll(placeholder, value)
}

writeFileSync(filePath, content)
