require('dotenv').config()
const connection = mysql.createConnection(process.env.DATABASE_URL)

const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'whatToEat',
}); 


app.post('/create', (req, res) => {
    const name = req.body.name;
    const type = req.body.type;
    const location = req.body.location;
    const recommendation = req.body.recommendation;
    const price = req.body.price;
    const rating = req.body.rating;
    const comments = req.body.comments;

    db.query('INSERT INTO restaurants (name, type, location, recommendation, price, rating, comments) VALUES (?,?,?,?,?,?,?)', [name, type, location, recommendation, price, rating, comments], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('values inserted')
        }
    });
});

app.get('/food', (req, res) => {
    db.query('SELECT * FROM restaurants', (err, result) => {
       if (err) {
        console.log(err)
       } else {
        res.send(result)
       }
    });
});

app.put('/update', (req, res) => {
    const id = req.body.id;
    const rating = req.body.rating
    db.query('UPDATE restaurants SET rating = ? WHERE id = ?', [rating, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM restaurants WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
});

// ******************************* new restaurants to try

app.post('/newcreate', (req, res) => {
    const name = req.body.name;
    const type = req.body.type;
    const location = req.body.location;
    const price = req.body.price;
    const comments = req.body.comments;

    db.query('INSERT INTO newRestaurants (name, type, location, price, comments) VALUES (?,?,?,?,?)', [name, type, location, price, comments], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('values inserted')
        }
    });
});

app.get('/newfood', (req, res) => {
    db.query('SELECT * FROM newRestaurants', (err, result) => {
       if (err) {
        console.log(err)
       } else {
        res.send(result)
       }
    });
});

app.put('/newUpdate', (req, res) => {
    const id = req.body.id;
    const rating = req.body.rating;
    db.query('UPDATE newRestaurants SET name = ? WHERE id = ?', [rating, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
})

app.delete('/newDelete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM newRestaurants WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
});

app.get('/search', (req, res) => {
    const type = req.query.type;
    const price = req.query.price;
    const rating = req.query.rating;  
    db.query("SELECT name, type, location, recommendation, price, rating, comments FROM restaurants WHERE type = ? AND price = ? AND rating = ? UNION SELECT name, type, location, Null as recommendation, price, Null as rating, comments FROM newRestaurants WHERE type = ? AND price = ?", [type, price, rating, type, price], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: 'Database error' });
        } else {
            res.send(result)
        }
    })
  });

  app.get('/random', (req, res) => {
    const type = req.query.type;
    const price = req.query.price;
    const rating = req.query.rating;  
    db.query("SELECT name, type, location, recommendation, price, rating, comments FROM restaurants WHERE type = ? AND price = ? AND rating = ? UNION SELECT name, type, location, Null as recommendation, price, Null as rating, comments FROM newRestaurants WHERE type = ? AND price = ? ORDER BY RAND() LIMIT 1", [type, price, rating, type, price], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: 'Database error' });
        } else {
            res.send(result)
        }
    })
  });

app.listen(3001, () => {
    console.log('Connected to PlanetScale!')

});

