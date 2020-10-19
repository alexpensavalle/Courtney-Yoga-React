const User = require('../../models/user');
const Class = require('../../models/yogaClass');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  bookClass,
  showSelectedClasses
};

async function signup(req, res) {
  const user = new User(req.body); 
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function bookClass(req, res) {
  
  const user = await User.findById(req.body.user._id);

  if(!(user.signups.includes(req.body.classID))) { //ONLY IF that ID is NOT already in signups array
    user.signups.push(req.body.classID);//add yogaClasses ID to users signup array 
  }
  else {
    console.log("CLASS ALREADY SELECTED");
    return res.status(401).json({err: 'Class Already Selected!'});
 }
  
  user.save();
  
  /*if (!user) return res.status(401).json({err: 'Please log in or sign up'});*/
  return res.status(201).json(user);
}

async function showSelectedClasses(req, res) {
  
  console.log(req);

  const user = await User.findById(req.body.user._id);

  if(user.signups.includes(req.body.classID)) {
    const yogaClass = await Class.findById(req.body.classID);
    res.status(200).json(yogaClass);
  }
  else {
     console.log("If statement not working");
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}