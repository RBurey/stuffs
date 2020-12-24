const exp = require("express");
const bp = require('body-parser');
const mongoose = require("mongoose");


const app=exp();
app.use(bp.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://admin:yeetkc1@cluster0.mjzsy.mongodb.net/homeworkDB",{useNewUrlParser: true});
mongoose.set("useCreateIndex", true);

const hwSchema = new mongoose.Schema({
  title: String,
  body: String,
  dueDate: String
});
const Homework = new mongoose.model("Homework", hwSchema);


app.get("/",function(req,res){
  res.send("<h1>Hello World</h1>")
});
app.post("/con",(req,res)=>{
      //res.send("CONNECTION!!");
      const hwork = new Homework({
        title:req.body.title,
        body:req.body.body,
        dueDate:req.body.dueDate
      });
      hwork.save().then(()=>{
        Homework.find((err,foundHWorks)=>{
            if(err)
            {
              console.log(err)
            }else{
              res.send(foundHWorks);
            }
        });

      });

});

app.listen(5000,function(){
  console.log("server has started");
});
