const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  bookClass
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
  else console.log("Class Already Selected");
  
  user.save();
  
  /*if (!user) return res.status(401).json({err: 'Please log in or sign up'});*/
  return res.status(201).json(user);
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}