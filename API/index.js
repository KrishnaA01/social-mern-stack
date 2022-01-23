const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")


dotenv.config();
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log('connected to MongoDB');
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);


app.get("/", (req,res)=>{
    res.send("welcome to the homepage mate")
})
app.get("/users", (req,res)=>{
    res.send("welcome to the USERS mate")
})


const PORT = 8800;
app.listen(PORT,()=>{
    console.log(`Backend server is running on the localhost:${PORT}`);
})
