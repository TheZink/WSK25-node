import promisePool from '../../utils/database.js';

const listAllCats = async () => {
    const [rows] = await promisePool.query('SELECT * FROM wsk_cats');
    console.log('rows', rows);
    return rows;
};

const findCatById = async (id) => {
    const [rows] = await promisePool.execute('SELECT * FROM wsk_cats WHERE cat_id = ?', [id]);
    console.log('rows', rows);
     if (rows.length === 0) {
        return false;
     }
     return rows[0];
};

const addCat = async (cat) => {
  const {cat_name, weight, owner, filename, birthdate} = cat;
  console.log("kaaattt", cat)
  const sql = `INSERT INTO wsk_cats (cat_name, weight, owner, filename, birthdate)
               VALUES (?, ?, ?, ?, ?)`;
  const params = [cat_name, weight, owner, filename, birthdate];
    const rows = await promisePool.execute(sql, params);
    console.log('rows', rows);
     if (rows[0].affectedRows === 0) {
        return false;
     }
    return {cat_id: rows[0].insertId};
};

const updateCat = async (cat, id) => {
  const sql = promisePool.format(`UPDATE wsk_cats SET ? WHERE cat_id = ?`, [cat, id]);
    const rows = await promisePool.execute(sql);
    console.log('rows', rows);
     if (rows[0].affectedRows === 0) {
        return false;
     }
     return {message: 'success'};
};

const removeCat = async (id) => {
    const [rows] = await promisePool.execute('DELETE FROM wsk_cats WHERE cat_id = ?', [id]);
    console.log('rows', rows);
     if (rows.affectedRows === 0) {
        return false;
     }
     return {message: 'success'};
};
const getOwnerName = async (id) => {
  try {
    const [rows] = await promisePool.execute('SELECT name FROM wsk_users WHERE user_id = ?', [id]);
    
    if (rows.length === 0) {
      throw new Error('User not found');
    }

    return rows[0].name;
    
  } catch (error) {
    console.error('Error fetching owner name:', error);
  
    throw new Error('Failed to fetch owner name');
  }
};


const findCatByOwnerId = async (id) => {
  const [rows] = await promisePool.execute('SELECT * FROM wsk_cats WHERE owner = ?', [id]);
  
    console.log('rows', rows);
     if (rows.length === 0) {
        return false;
     }
     return rows[0];

};

export { listAllCats, findCatById,
    addCat, updateCat, getOwnerName,
    removeCat, findCatByOwnerId,
  };