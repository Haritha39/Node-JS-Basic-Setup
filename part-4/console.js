const chalk=require('chalk'); // for terminal colors
//Console methods

//warning
console.warn("Warning");
//error
console.error("Error");
//info
console.info("Info");
//log
console.log("Log");

// log "Error" with red color
console.log(chalk.red("Error"));

// log "Success" with green color
console.log(chalk.green("Success"));

// log "In progress..." with bgcolor yellow and red color
console.log(chalk.red("Error"));
// log "Failed" with bgcolor red and white color
console.log(chalk.bgRed.white("Failed"));

// Calculate a users() function's execution time using time and timeEnd of console methods.
const users=()=>{
    console.time("users()");
    for(let i=0;i<100000;i++){
        // do something
    }
    console.timeEnd("users()");
}
users();