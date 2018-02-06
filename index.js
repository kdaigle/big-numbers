module.exports = (robot) => {
  // Your code here
  robot.log('Yay, the app was loaded!')
  robot.on('pull_request.synchronize', async context => {
    context.log('Pull request is incoming...')
    context.log(context.payload)

    // Set the correct requestMedia
    context.github.config.requestMedia = 'application/vnd.github.v3.patch'

    const result = await context.github.pullRequests.get({owner: 'kdaigle', repo: 'testing', number: 1})
    context.log(result.data)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
