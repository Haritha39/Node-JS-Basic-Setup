require('dotenv').config(); // gives undefined if not installed
// process env variable
console.log(process.env);
console.log(process.env.SITE);
// process to get current working directory
console.log(process.cwd());
// process to get current process id
console.log(process.pid);
