import * as core from '@actions/core'
import * as github from '@actions/github'
import * as greetings from './greetings'

try {
    const nameToGreet = core.getInput("who-to-greet")

    core.startGroup('getGreeting group...')
    const greeting = greetings.getGreeting(nameToGreet)
    core.endGroup()

    core.exportVariable('CI', "true")

    console.log(greeting)
    core.setOutput('greeting', greeting)

    console.log("I am logging from console")
    console.warn("I am warning from console")
    core.debug("I am logging from core.debug")
    core.info("I am logging from core.info")
    core.warning("I am logging from core.warning")

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`Payload: ${payload}`)
} catch (error) {
    core.setFailed(`Failed for the following reason: ${error.message}`)
}
