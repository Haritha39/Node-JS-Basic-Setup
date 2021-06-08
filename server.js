import module from 'module';
const require=module.createRequire(import.meta.url);
const http=require('http');
const hostname="localhost";
const port=3000;
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hello World!!!</h1>')
});
server.listen(port,hostname,()=>{
    console.log(`Server is running on ${hostname} : ${port}`);
});

// EXPORTS
// Object String Literals
const hello = require('./hello.cjs');
console.log(hello);

// Object Properties
const output = require("./sample.cjs");
console.log(output.sample)

// Object Function
const output2= require('./log');
output2.log("Hello!! This is harry");

// MULTIPLE MODULES
const output3= require('./utility');
output3.log("Hello!! Utility");

//ES6
// mjs-modulejs ṁṇcjs-commonjs
// Method 1
// import log,{hello} from './es6.js';
// log('This is default export ES6');
// hello();
// Method 2
import * as logger from './es6.mjs';
logger.default('Logger Default');
logger.hello();