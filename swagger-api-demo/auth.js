const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];   
    const token = authHeader && authHeader.split(' ')[1];   

    if (!token) 
        return res.status(401).json({ message: 'El cliente no envio el token' });   

    jwt.verify(token, 'your_secret_key', (err, user) => {     
        if (err) 
            return res.status(403).json({ message: 'Token invalido' }); 
        req.user = user; 
        next(); 
    });
};

module.exports = authenticateToken;