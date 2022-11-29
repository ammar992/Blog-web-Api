const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./config/connectdb');
const userAuth = require('./routes/authRoutes');
const user = require('./routes/userRoutes');
const post = require('./routes/postRoutes');
const DATABASE_URL = "mongodb://localhost:27017";

const PORT = process.env.PORT;
app.get('/',(req,res)=>{
    res.send("Working");
})


app.use(cors());
app.use(express.json());



connectDB(DATABASE_URL);

app.use('/api',userAuth);
app.use('/api',user);
app.use('/api',post);

app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`);
})

