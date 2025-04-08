import {listAllCats, findCatById, addCat, updateCat, removeCat } from "../models/cat-model.js";

const getCat = (req, res) => {
    res.json(listAllCats());
}

const getCatById = (req, res) => {
    const catId = parseInt(req.params.id);
    const cat = findCatById(catId);
    if (cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
    }
}

const postCat = (req, res) => {
    req.body.filename = req.file.filename;
    const result = addCat(req.body);
    if (result.cat_id) {
        res.status(201);
        res.json({message: 'New cat added', result});
    } else {
        res.sendStatus(400);
    }
}

const putCat = (req, res) => {
    const catId = parseInt(req.params.id);
    const updatedCat = req.body;

    const result = updateCat(catId, updatedCat);

    if(result){
        res.sendStatus(200);
        res.json(result)
    } else {
        res.sentStatus(400);
    }

}

const deleteCat = (req, res) => {
    const catId = parseInt(req.params.id);

    const result = removeCat(catId);
   
    if(result){
        res.sendStatus(200);
        res.json(result)
    } else {
        res.sentStatus(400);
    }

    res.sendStatus(200);
}

export {getCat, getCatById, postCat, putCat, deleteCat}