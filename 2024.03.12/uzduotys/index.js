import express from 'express';
const app = express()

app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/login', (req, res) => {
    console.log(req.body)

    if (req.body.email === 'admin@vcs.lt' && req.body.password === 'Github12') {
        res.send('Sveikiname sėkmingai prisijungus')
    } else if (!req.body.email || !req.body.password) {
        res.send('Negavome jokių duomenų, bandykite dar kartą')
    } else {
        res.send('Neteisingi prisijungimo duomenys')
    }


});


app.get('/news', (req, res) => {
    // Sukurkite express GET route'ą /news kuris grąžintų HTML stringą su trimis naujienų pavadinimais.
    // Taipogi funkcijoje priimkite query parametrą "adsource" su galimomis reikšmėmis: "google" ir "amazon".
    // Jeigu query parametras yra "google" virš naujienų įrašykite tekstą: "Google reklamos blokas".
    // Jeigu parametras yra "amazon": "Amazon reklamos blokas".
    // Jeigu parametras neperduodamas arba jo reikšmė yra kitokia prie naujienų nepridėkite jokio teksto.

    const stringas = `
<li>Naunieju Naujiena</li>
<h2>Kazkas bus</h2>
<h3>Nieko nebus</h3>
`

    if (req.query.adsource === 'google') {

        // console.log(req.query.adsource)
        res.send(`<h1>Google reklamos blokas : ${stringas}</h1>`)
    } else if (req.query.adsource === 'amazon') {
        res.send(`<h1>Amazon reklamos blokas : ${stringas}</h1>`)
    } else {
        res.send('Tuscia')
    }
})

const validateEmail = (email) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
};

const passwordValid = (password) => {
    return /[0-9]/.test(password);
}
app.post('/register', (req, res) => {
    console.log(req.body)

    if (!req.body.name || !req.body.last_name || !req.body.email || !req.body.password) {
        return res.send(`negauti registracijos duomenys`)
    }
    if (req.body.name.length <= 3 || req.body.name.length >= 200) {
        return res.send(`Neteisingai ivestas vardas`)
    }
    if (req.body.last_name.length <= 3 || req.body.last_name.length >= 200) {
        return res.send(`Neteisingai ivesta pavarde`)
    }
    if (req.body.email.length < 5 || req.body.email.length > 50) {
        return res.send(`Neteisingai ivestas email`)

    }
        if (!validateEmail(req.body.email))
            return res.send(`Neteisingai ivestas email`)

    if (req.body.password.length < 8 || req.body.password.length >= 16) {
        return res.send(`Neteisingai ivestas password`)
    }
     if (!passwordValid(req.body.password)) {
        return res.send(`Neteisingai ivestas password`)
    }
    res.send('sveikinam prisijungus')
    


})


app.listen(3002)