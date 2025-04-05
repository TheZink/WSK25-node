import { addCat, findCatById, listAllCats, updateCat, removeCat } from "../models/cat-model";

const getCat = (req, res) => {
    res.json(listAllCats());
}

const getCatById = (req, res) => {
    const cat = findCatById(req.params.id);
    if (cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
    }
}

const postCat = (req, res) => {
    const result = addCat(req.body);
    if (result.cat_id) {
        res.status(201);
        res.json({message: 'New cat added', result});
    } else {
        res.sendStatus(400);
    }
}

const putCat = (req, res) => {
    const catId = req.params.id;
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
    const catId = req.params.id;

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