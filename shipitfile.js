module.exports = shipit => {
    // Load shipit-deploy tasks //npx shipit staging deploy
    require('shipit-deploy')(shipit)
    require('shipit-shared')(shipit)

    shipit.initConfig({
      default: {
        deployTo:  '/var/www/scora.dailysocial.id',
        // deployTo:  '/var/www/drax-scora.dailysocial.id',
        repositoryUrl: 'https://sulistyoardani@bitbucket.org/dsn-js/scora-web.git',
        keepReleases: 3,
        shared: {
          overwrite: true,
          files: ['.env']
        },
        // branch: "drax" ,
        branch:  "master",
      },
      staging: {
        servers: 'root@137.59.126.106:8039',
      },
    })

    shipit.blTask('npm:install', async () => {
      await shipit.remote(`cd ${shipit.releasePath} && npm install`)
    })

    shipit.blTask('build:js', async () => {
      const command = 'npm run build'
      await shipit.remote(`cd ${shipit.releasePath} && ${command}`)
    })


    shipit.on('updated', async () => {
      shipit.start('npm:install', 'build:js')
    });


    shipit.on('published', () => {
      console.log('🔥 published ☘️')
    })


}