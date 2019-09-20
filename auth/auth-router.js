const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//create model for db interactions
const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js');

router.post('/register', (req, res) => {
  let user = req.body;
  //hash password
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({ message: 'There was a problem registering the user.' });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
  .first()
  .then(user => {
    //verify password w/ bcrypt compareSync
    if (user && bcrypt.compareSync(password, user.password)) {
      //create JW token
      const token = generateToken(user)
      res.status(200).json({token});
    } else {
      res.status(401).json({ message: 'Please provide valid credentials.' });
    }
  })
  .catch(error => {
    res.status(500).json({ error: error, message: 'There was a problem logging in the user.' });
  });
});

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
};


module.exports = router;
