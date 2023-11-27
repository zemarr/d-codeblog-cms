module.exports = ({ env }) => ({
  // ...
  'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: env('NEON_API_KEY'), // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: env('NEON_PROJECT_NAME'), // the neon project under which your DB runs
      neonRole: env('NEON_ROLE'), // create it manually under roles for your project first
      //(gitBranch: "main") // branch can be pinned via this config option. Will not use branch from git then. Useful for preview/production deployment
    }
  },
  // ...
})
