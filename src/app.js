const express= require("express");
const app= express();

require("../src/db/conn");

const User=require("../src/model/user");

const port=process.env.port || 8000;
app.use(express.json());

app.get("/",(req,res)=>{
      res.send("hello from poonam");
    })

app.post("/user",async(req,res)=>{
try {
    const addUser= new User(req.body);
    console.log(addUser);
    const newUser=await addUser.save();
    res.status(201).send(newUser);
} catch (e) {
    res.send(e);
    }
})

app.get("/user",async(req,res)=>{
    try {
        const getUser= await User.find({}).sort({"name":"asc"});
        res.send(getUser);
    } catch (e) {
       res.status(400).send(e);
        
    }
})

app.get("/user/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const findUser= await User.findById({_id:_id});
        res.send(findUser);
    } catch (e) {
       res.status(400).send(e);
        
    }
})

app.patch("/user/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const updateUser= await User.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updateUser);
    } catch (e) {
       res.status(400).send(e);
        
    }
})

app.delete("/user/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const deleteUser= await User.findByIdAndDelete(_id);
        res.send(deleteUser);
    } catch (e) {
       res.status(400).send(e);
        
    }
})
app.get("/user:address",async(req,res)=>{
    try {
        var name=req.params.address;
        const findUserbyname= await User.find({ address:name },{new:true});
        res.send(findUserbyname);
    } catch (e) {
       res.status(400).send(e);
        
    }
})

 app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
 }
 )