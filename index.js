const express = require ('express');
const cors = require ('cors');

const app  = express();
const port = process.env.PORT || 5000;

app.use(cors());

const hotelsList = require('./data/data.json');


app.get('/', (req, res) => {
    res.send("This is a travel Data")
})

app.get('/courses', (req, res) => {
    res.send(hotelsList);
});

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const singleHotel = hotelsList.find( ht => ht.id === id);
    res.send(singleHotel);
});

app.listen(port, () => {
    console.log(`Travel guru rubbing on port, ${port}`);
})
