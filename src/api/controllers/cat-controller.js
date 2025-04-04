import { addCat, findCatById, listAllCats } from "../models/cat-model";

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

const putCat = (res, req) => {
    //TODO
    res.sendStatus(200);
}

const deleteCat = (req, res) => {
    //TODO
    res.sendStatus(200);
}