import express  from 'express';
//Express karkaso iniciavimas
const app = express();

// NORINT PRIIMTI DUOMENIS urlencoded FORMATU REGISTRUOJAMA EILUTE
app.use(express.urlencoded({
  extended: true
}));

// Kelio registravimas (Route)
// GRUD:
// CREATE - POST
// READ - GET
// UPDATE - PUT
// DELETE - DELETE

// galimi metodai
// .get() - GET HTTP METODAS (GET metodu pateikiant uzklausa body duomenys nera persiunciami)
// .post() - POST HTTP METODAS
// .put() - PUT HTTP METODAS
// .delete() - DELETE HTTP METODAS

// Pirmas parametras: kelias(route), endpoint
//Antras parametras: funkcija kuri bus issaukiama vartotojui atejus nurodytu keliu

app.get('/',  (req, res) => {
  // I funkcija priimami du parametrai:
  // req - Request (Uzklausa)
  // res - Response (Atsakymas)
  console.log('Funkcija aktyvuota')
  // Teksto 'Hello World' grazinimas vartotojui (client)
  
  res.send('<h1>Titulinis puslapis pakeistas</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Apie mus</h1>')
});

// Query parametru priemimas
app.get('/query' , (req, res) => {
  // req.query - Query parametrai nugula req objekte su query raktazodziu
  //  console.log(req.query);
   res.send(`
   <li>Daina: ${req.query.song}</li>`)
});

// POST http metodu perduod
app.post('/post', (req, res) => {
  // req.body grazina body lygmenyje persiustus duomenis
    console.log(req.body);

    if(req.body.song === 'Live forever') {
      console.log('Kondicija teigiama')
    }

    res.send(`
    <li>Filmas: ${req.body.movie ? req.body.movie : 'Nerasta'}</li>
    <li>Daina: ${req.body.song ? req.body.song : 'Nerasta'}</li>
    `)
});

app.post('/check' , (req, res) => {
  if(req.body.name === 'Laimis') {
    res.send('Administratorius');
  } else {
  res.send('Vartotojas');
  }
})

// Serverio paleidimas port`e 3001, galima keisti pavadinima pvz 3002
app.listen(3001);