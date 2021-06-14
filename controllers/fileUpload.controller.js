const storeSingleFile = (req, res) => {
    res.send({
        success: true,
        message: "File Uploaded Successfully!",
        url: "http://localhost:3000/uploads/" + req.file.filename
    })
}

const storeMultipleFiles = (req, res) => {
    let urls = req.files.map(file => "http://localhost:3000/uploads/" + file.filename)
    console.log(urls);
    res.send({
        success: true,
        message: "Files Uploaded Successfully!",
        urls: urls
    });
}
module.exports = { storeSingleFile, storeMultipleFiles }