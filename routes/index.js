const user = require('./user.route');
const topics=require('./topics.route');
const fileHandle=require('./filehandle.route');
const fileUpload=require('./fileUpload.route');
const payment=require('./payment.route')
module.exports={
    user,topics,fileHandle,fileUpload,payment
}