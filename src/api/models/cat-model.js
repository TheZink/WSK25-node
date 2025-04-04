const catItems = [
    {
        cat_id: 123,
        cat_name: 'Pasi',
        weight: 6,
        owner: 3609,
        filename: 'filename',
        birthdate: '2013-07-01',
    }, 
    {
        cat_id: 124,
        cat_name: 'Kerttu',
        weight: 8,
        owner: 3601,
        filename: 'filename2',
        birthdate: '2014-04-03',
    },
]

const listAllCats = () => {
    return catItems;
};

const findCatById = (id) => {
    return catItems.find((item) => item.cat_id === id)
};

const addCat = (cat) => {
    const {cat_name, weight, owner, filename, birthdate} = cat;
    const newId = catItems[0].cat_id + 1
    catItems.unshift({
        cat_id: newId,
        cat_name,
        weight,
        owner,
        filename,
        birthdate,
    });
    
    return {cat_id: newId};
};

const putCat = (id) => {
    
}

export {listAllCats, findCatById, addCat};
