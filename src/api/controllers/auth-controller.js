import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {login} from '../models/user-model.js';

const authUser = async (req, res) => {
    console.log('postLogin', req.body);
    const user = await login(req.body.username);
    if (!user) {
      res.sendStatus(401);
      return;
    }
  
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      res.sendStatus(401);
      return;
    }
    
    const userWithNoPassword = {
      user_id: user.user_id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
    };
  
    const token = jwt.sign(userWithNoPassword, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });
    res.json({user: userWithNoPassword, token});
  };

  const getMe = async (req, res) => {
    console.log('getMe', res.locals.user);
    if ( res.locals.user) {
      res.json({message: 'token ok', user:  res.locals.user});
    } else {
      res.sendStatus(401);
    }
}
  
  export {authUser, getMe};