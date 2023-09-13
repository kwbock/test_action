const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const taskArns = ["arn:123"];
  console.log("taskArns", taskArns);
  core.setOutput("time", taskArns);
} catch (error) {
  core.setFailed(error.message);
}