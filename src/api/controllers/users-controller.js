import {listAllUsers, findUserById, addUser, updateUser, removeUser} from '../models/user-model.js';
import bcrypt from 'bcrypt';

const getUser = (req, res) => {
  res.json(listAllUsers());
};

const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = await findUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const postUser = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10)
  const result = await addUser(req.body);
  if (result.user_id) {
    res.status(201);
    res.json({message: 'New user added.', result});
  } else {
    res.sendStatus(400);
  }
};
const putUser = async (req, res) => {
    const userId = await parseInt(req.params.id);
    const updatedUser = req.body;

    const result = updateUser(userId, updatedUser);

    if(result) {
        res.sendStatus(200);
        res.json(result);
    } else {
        res.sendStatus(400);
    }
};

const deleteUser = async (req, res) => {
    const userId = parseInt(req.params.id);

    const result = await removeUser(userId);

    if(result){
        res.sendStatus(200);
        res.json(result);
    } else {
        res.sendStatus(400);
    }
};

export {getUser, getUserById, postUser, putUser, deleteUser};