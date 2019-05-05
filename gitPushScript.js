const { exec } = require('child_process');
const util = require('util');
const execFunc = util.promisify(exec);

async function runScript() {
  try {
    await execFunc('git add README.md');
    await execFunc(`git commit -m "${process.argv[2]}"`);
    execFunc('git push');
  } catch (error) {
    throw error;
  }
}

runScript();
