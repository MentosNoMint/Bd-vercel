const express = require('express');

let app = express();


const PORT = process.env.PORT || 4000;

app.listen(PORT , () => {
    console.log(`start ${PORT}`)
})

app.get('/' , (req , res) =>{
    res.end('<h1>Home page</h1>')
})

app.get('/about' , (req , res) =>{
    res.end('<h1>about page</h1>')
})