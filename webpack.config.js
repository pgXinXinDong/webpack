const path = require("path")

module.exports = {
    entry: path.join(__dirname,'./hello.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename: "bundle.js"
    },
    mode:'development'
}
