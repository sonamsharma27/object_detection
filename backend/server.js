const express = require('express');;
const pkg = require('body-parser');

const cors = require('cors');
const knex = require('knex');
const app = express();
const Clarifai = require('clarifai');

const apps = new Clarifai.App({
 apiKey: '519a1ee7506440e9b5571b55606d94f6'
});


const { json } = pkg;
const postgres = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    //   port : 5432,
    user: 'postgres',
    password: 'divinesoul',
    database: 'postgres'
  }
});
// const config = {
//   user: 'postgres',
//   database: 'postgres',
//   password: 'divinesoul'
// }
//  console.log(postgres.select('*').from('users'));

app.use(json()); //to parse req from front end which is in json form
// bodyparser is a middleware

app.use(cors());

app.get('/', (req, res) => {
  res.send("Root route");
  //res,json("Root route");
})




app.post('/signup', (req, res) => {
  let { name, email, password } = req.body;

  postgres('users')
    .returning('*')
    .insert({
      name: name,
      email: email,
      password: password
    }).then(response => { res.json(response) })
    .catch(err => {
      console.log(err);
      res.status(400).json(err)
    }
    );
  })
  //model id 3df9e7b5c0f74a369919f6c0227afa08 //gim aaa03c23b3724a16a56b629203edc62c
app.post('/image',(req, res)=>{
  console.log("image route")
  let {url}=req.body;
  apps.models.predict('aaa03c23b3724a16a56b629203edc62c',url)
	.then(data=> {
    console.log("after fetching",data);
		res.json(data);
	})
	.catch(err=>{
    // console.log(err);
    res.status(400).json('Not able to work with API')})

 
})
  
app.post('/login', (req, res)  => {
  const {email, password} = req.body;
  if(!password||!email) {
 return res.status(400).json('Incorrect form Submission');
}
  console.log("server")
   postgres.select('email').from('users')
   .where('email','=',email ,'and', 'password','=',password)
   .then(data=> {
     console.log(data);
     if(data) {
       return postgres.select('*').from('users')
       .where('email','=',email)
       .then(user=> {
         
         res.json(user[0]);
       })
       .catch(err=> res.status(400).json('Unable to find the user'));
      }
     else
     {
       res.status(400).json('Wrong credentials');
     }
   })
   .catch(err=>res.status(400).json('Wrong credentials'))
 
})


app.listen(3005, () => {
  console.log("Running on port 3005");
})

// POST whenever we want to add data to DB (create record)
// PUT to update
// GET to read
// we get req in the form of a 