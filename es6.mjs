// Default Export
function log(msg){
    console.log(msg);
}
export default log;


// Named Export
function hello(){
    console.log('Named EXPORT');
}
export {hello};