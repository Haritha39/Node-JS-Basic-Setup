# Node-JS-Basic-Setup
Basic Setup of Node JS projects

### What is exactly Node JS ?
  - Node.js is a JavaScript runtime built on the V8 JavaScript engine.
  - Runtime Environment means like java JRE.
  - JRE has JVM and modules/libraries inside it.
  - Node has modules/libraries and v8 engine inside it.
  - Can call it as node.js , nodejs and node no problem.
### Why Node JS ?
  - Generally javascript is understandle to browser only but developers want js to run our machines , so they developed node js out of that thought.
  - Browser has different js engines like v8 javascript engine by chrome , chakra by microsoft ,spidermonkey by mozilla etc.
  - Node is built on v8 engine written in c++ .
  - This engine takes js code and convert to machine code(0's and 1's).
  - It is a non-blocking I/O module means  system won't wait for completion of first request , it executes all.
  - Js has a event driven loop which means puts the instructions one by one on stack and pops out to v8 engine then it goes to callback queue.
  - Now if the stack is empty , it sends requests from queue in FIFO order.

### NPM
  - npm is node.js node package manager.
  - node modules are modules that won't affect code and useful as inbuilt functions.

### References  : freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/

### Execute node script
`node filename.js`