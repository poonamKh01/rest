const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://poonam:1234@cluster0.z1dln.mongodb.net/Sshopee",{

}).then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("not successfull");
});