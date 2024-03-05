const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const productionConfig = {
  output: 'export',
}

/** @type {import('next').NextConfig} */
const developmentConfig = {
}

module.exports = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  ...(phase === PHASE_DEVELOPMENT_SERVER ? developmentConfig : productionConfig),
})
