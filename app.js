import express from "express";
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.get('/', (req,res) => {
    res.send('Welcome');
});

app.get('/api/v1/cat', (req, res) => {
    const cat = {
        cat_id: 246,
        name: 'Pasi',
        birthdate: '2013-07-01',
        weight: 6,
        owner: 'Ilkka',
        image: 'https://loremflickr.com/320/240/cat'
    };

    res.json(cat);
})

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
});
