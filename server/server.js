const fs = require('fs')

const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require("jsonwebtoken");
const { default: axios } = require('axios');

const SECRET_KEY = "HotDog14!" 

const server = jsonServer.create()
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

// Check if the user exists in database
function isAuthenticated({email, password}){
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

//Verify the token
function verifyToken(token){
    return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
  }

function findUser({email}){

    let result = userdb.users.filter(user => user.email == email);

    return {
        
        email:result[0].email,
        id:result[0].id,
        name:result[0].name
    };
}



// Login to one of the users from ./users.json
server.post('/api/auth/login', (req, res) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const {email, password} = req.body;
  if (isAuthenticated({email, password}) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({status, message})
    return
  }else {

    const user = findUser({email})

    const payload = {user}

    jwt.sign(payload,SECRET_KEY,{expiresIn:1800},(err,token)=>{

        if(err) throw err;
        const status = 200;
        const data = {

            user:payload.user,
            token:token
        }
        res.status(status).json(data);
    })
  }
})


// Get User with Token

server.get('/api/user/',(req,res) => {

    let verifyTokenResult;
    if(req.headers.authorization){
        verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);
    }else {
        const status = 401
        const message = 'invlaid token'
        return res.status(status).json({message})
    }

    if(verifyTokenResult.user){
        return res.status(200).json(verifyTokenResult.user)
    }else {
        const status = 401
        const message = 'token is expired'
        return res.status(status).json({message})
    }

})

server.get('/api/music/data', async (req,res) => {
    let verifyTokenResult;
    if(req.headers.authorization){
        verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);
    }else {
        const status = 401
        const message = 'invlaid token'
        return res.status(status).json({message})
    }


    if(!verifyTokenResult.user){
        const status = 401
        const message = 'token is expired'
        return res.status(status).json({message})
    }

    try {
        const resultado = await axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/db');
        return res.status(200).json(resultado.data)
        
    } catch (error) {
        const status = 500;
        const message = 'Internal Error';

        return res.status(status).json(message);
    }

})




server.listen(8000, () => {
  console.log('Run Auth API Server')
})
