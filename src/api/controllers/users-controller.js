import {listAllUsers, findUserById, addUser, updateUser, removeUser} from '../models/user-model.js';

const getUser = (req, res) => {
  res.json(listAllUsers());
};

const getUserById = (req, res) => {
  const user = findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const postUser = (req, res) => {
  const result = addUser(req.body);
  if (result.user_id) {
    res.status(201);
    res.json({message: 'New user added.', result});
  } else {
    res.sendStatus(400);
  }
};
const putUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;

    const result = updateUser(userId, updatedUser);

    if(result) {
        res.sendStatus(200);
        res.json(result);
    } else {
        res.sendStatus(400);
    }
};

const deleteUser = (req, res) => {
    const userId = req.params.id;

    const result = removeUser(userId);

    if(result){
        res.sendStatus(200);
        res.json(result);
    } else {
        res.sendStatus(400);
    }
};

export {getUser, getUserById, postUser, putUser, deleteUser};