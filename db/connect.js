const mongoose = require("mongoose");

// uri = 
// "mongodb+srv://jadhavswapnil3011:MmUc3Rxx1DWcHN4n@swapnilapi.qvtod3o.mongodb.net/SwapnilApi?retryWrites=true&w=majority";

const connectDB = (uri) => {
    console.log("Database connected");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
