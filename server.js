const app = require("./src/app");
const connectDB=require('./src/db/db')
require('dotenv').config();

connectDB()
app.listen(3000,()=>{
    console.log("Server is running of this port 3000");
})