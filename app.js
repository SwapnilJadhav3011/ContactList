
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT= process.env.PORT || 5000;
const contacts_routes = require("./routes/contacts");



app.get("/", (req,res) => {
    res.send("hi am live");
});
//to set router 
app.use("/api/contacts", contacts_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
          console.log(`${PORT} yes Get method connected`)
        });
    } catch(error){
        console.log(error);
    }
};

start();
