"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
function getGreeting(whoToGreet) {
    core.debug("I am now in getGreeting function");
    return `Hello ${whoToGreet}`;
}
try {
    const nameToGreet = core.getInput("who-to-greet");
    core.startGroup('getGreeting group...');
    const greeting = getGreeting(nameToGreet);
    core.endGroup();
    core.exportVariable('CI', "true");
    console.log(greeting);
    core.setOutput('greeting', greeting);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`Payload: ${payload}`);
}
catch (error) {
    core.setFailed(`Failed for the following reason: ${error.message}`);
}
