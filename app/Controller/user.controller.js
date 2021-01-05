const jwt = require('jsonwebtoken');

const accessTokenSecret = 'mysecrettoken';

exports.login = (req,res)=>{
    const {username,password} = req.body;
    if(username){
        const acesstoken = jwt.sign({username: username, password:password},accessTokenSecret,{expiresIn: '20m'});
        res.json({accessToken:acesstoken});
    }
    else{
        res.status(401).send('No users found')
    }
}

exports.sample = (req,res)=>{
    res.json({'message':'A sample API call'})
};