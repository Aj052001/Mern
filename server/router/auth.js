const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser")
router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
}); 

const authenticate = require("../middleware/authenticate")
/*register part */

/*using async */
router.post("/register", async (req, res) => {
  const {firstname,lastname,email,gender, phone,age,  password, cpassword } = req.body;

  if (!firstname || !lastname || !email ||  !gender || !phone || !age || !password || !cpassword) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }
try{
     const userExist = await User.findOne({ email: email });
     if (userExist) {
      return res.status(422).json({ error: "Email already register" });
       } else {

      if(password==cpassword)
      {
        const user = new User({
            firstname:firstname ,
            lastname:lastname,
            email: email,
            gender:gender,
            phone: phone,
            age:age,
            password: password,
            cpassword: cpassword,
          });
          /*name:name (first database name and  second user field name) */
          
          


          const userRegister = await user.save();
          if (userRegister) {
            res.status(201).json({ message: "user registered successfully" });
          } else {
            res.status(500).json({ error: "Failed to registerd" });
          }
         
      }
      else{
        return res.status(422).json({ error: "Password not matching" });
      }


    }
    } catch (err) {
    console.log(err);
  }
});



/*using promise */
// router.post('/register',(req, res) => {

//   const {name,email,phone,work,password,cpassword}= req.body;

//     if(!name ||!email ||!phone ||!work ||!password ||!cpassword)
//     {
//         return res.status(422).json({error:"Plz filled the field properly"})
//     }

//     User.findOne({email:email}).then((userExist)=>{
//       if(userExist)
//       {
//         return res.status(422).json({error:"Email already register"})
//       }
//       else{
//         const user = new User({name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword})
//         /*name:name (first database name and second user field name) */

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"})
//         }).catch((err)=>{res.status(500).json({error:"Failed to registerd"})})
//       }
//     }).catch((err)=>{console.log(err)})
// });


// router.post("/signin",(req,res)=>{
// //   const  {email,password}= req.body;
//     console.log(email)
//     console.log(password)
//     res.json({message:"awesome"})
// })




/*login  part */
router.post("/signin", async (req, res) => {
    
    const  {email,password}= req.body;
        if(!email || !password)
        {
            return res.status(422).json({ error: "Plz filled the field properly" });
        }
    try {
        const userLogin = await User.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, userLogin.password);

        /*generate token */
        const token = await userLogin.generateAuthToken();
        const t = res.cookie("jwt",token);
       
        
        if (isMatch) {
               res.jsonp({message:"user signin successfully"})
             } else {
           res.status(422).json({error:"user error"})
           }
 } catch(err) {
      console.log(err)
    }
  });



 
  router.get('/about',authenticate,(req, res) => {
        console.log(`Hello my About`);
        res.send(req.user);
    });
 
  router.get('/ajay',(req, res) => {
        console.log(`Hello my About`);
        res.send("ajay");
    });


  
module.exports = router;
