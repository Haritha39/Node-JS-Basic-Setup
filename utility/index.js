
/** If package.json is not defined and used only the folder name while importing(in server.js) 
 * By default index.js will be taken by require
 */
module.exports.log = function (msg) {
    console.log("Hello"+msg);
}
