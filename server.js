const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbURL = "mongodb://mongo:27017/docker-node-mongo";
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
app.use(bodyParser.json());
const User = mongoose.model('User',{
    name:String,
    email:String,
    surname:String
});

app.get('/',(req,res)=>{
    res.send('hello shubh');
});

app.get('/user',async (req,res)=>{
    const user = await User.find({}).limit(10);
    res.send(user);
});

app.post('/user', async (req,res)=>{
    const user  = await new User(req.body).save();
    res.send(user);
});
const run = async()=>{
    await mongoose.connect(dbURL,{useNewUrlParser:true},(err)=>{
            if (!err) {
                console.log("Database is conncted successfully!!!");
                
            }
    });
}
 app.listen(PORT,()=>{
    console.log(`server is running ${PORT}!`);
    
});

run();