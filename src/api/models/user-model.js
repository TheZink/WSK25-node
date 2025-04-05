const userItems = [
    {
      user_id: 3609,
      name: 'Ilkka',
      username: 'ilkkas',
      email: 'ilkka@metropolia.fi',
      role: 'user',
      password: 'password',
    },
    {
      user_id: 3608,
      name: 'Lauri',
      username: 'lauriv',
      email: 'lauri@metropolia.fi',
      role: 'admin',
      password: 'password',
    },
  ];
  
  const listAllUsers = () => {
    return userItems;
  };
  
  const findUserById = (id) => {
    return userItems.find((item) => item.user_id === id);
  };
  
  const addUser = (user) => {
    const {name, username, email, role, password} = user;
    const newId = userItems[0].user_id + 1;
    userItems.unshift({
      user_id: newId,
      name,
      username,
      email,
      role,
      password,
    });
    return {user_id: newId};
  };

  const updateUser = (id, updatedData) => {
    const index = userItems.findIndex(item => item.user_id === id);

    if (index !== -1) {
      userItems[index] = {
        ...userItems[index],
        ...updatedData
      }
      return {message: `User ${id} udpated`};
    } else {
      return {message: `User with id ${id} dont exist`};
    }
  };

  const removeUser = (id) => {
    const index = userItems.findIndex(item => item.user_id === id);

    if (index !== -1) {
      userItems.splice(index, 1);
      return {message: `User ${id} removed`};
    } else {
      return {message: `User with id ${id} dont exist`};
    }

  }
  
  export {listAllUsers, findUserById, addUser, updateUser, removeUser};