module.exports = {
  apps : [{
    name: 'Nextjs',
    script: 'yarnpkg dev',
    watch: '.',
    env: {
      PORT: '3001',
      NODE_ENV: 'development'
    }
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
