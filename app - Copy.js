
const express = require('express');
const app = express();
const { handleChoice, score, gameReset } = require('./gameplay');
const session = require('express-session');

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static('public'));

app.use(session({
    secret: 'k!7$R8tQzY5^WxP',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    if (!req.session.score) {
        req.session.scoreCounter = 0;
    }
    next();
});

app.get('/homepage', (req, res) => {
    if (!req.session.score) {
        req.session.score = 0;
    }
    gameReset(req.session);
    res.render('index.ejs', { score: req.session.score });
});

app.get('/homepage/rules', (req,res) =>{
    res.render('rules.ejs')

})

app.get('/homepage/paper', (req, res) => {
    const { score, computerChoice, roundResult } = handleChoice('paper', req.session);
    res.render('paper.ejs', { score, computerChoice, roundResult });
});

app.get('/homepage/rock', (req,res) =>{
    const {score, computerChoice, roundResult} = handleChoice('rock', req.session);
    res.render('rock.ejs', { score, computerChoice, roundResult})
}
)
app.get('/homepage/scissors', (req,res) =>{
    const {score, computerChoice, roundResult} = handleChoice('scissors', req.session);
    res.render('scissors.ejs', { score, computerChoice, roundResult})
})

app.get('*', (req, res) => {
    res.status(404).render('404error.ejs');
});

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).render('serverError.ejs')
});

app.listen('8080', () => {
    console.log('LISTENING ON THE PORT 8080')
} )
