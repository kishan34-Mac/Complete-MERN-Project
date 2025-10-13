const app = require("./src/app");
const connectDB=require('./src/db/db')
require('dotenv').config();
console.log("Public Key:", process.env.IMAGEKIT_PUBLIC_KEY);



connectDB()
app.listen(3000,()=>{
    console.log("Server is running of this port 3000");
})