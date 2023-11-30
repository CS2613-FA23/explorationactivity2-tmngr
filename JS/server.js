const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const choice = req.body.click

    if (choice == 'ADD') {
        const result = n1 + n2
        res.send('The result is: ' + result)
    }
    else if (choice == 'SUBTRACT') {
        const result = n1 - n2
        res.send('The result is: ' + result)
    }
    else if (choice == 'DIVIDE') {
        if (n2 == 0)
            res.send('You can not divide by zero')
        else {
            const result = n1 / n2
            res.send('The result is: ' + result)
        }
    }
    else {
        const result = n1 * n2
        res.send('The resul is: ' + result)
    }
})

port = 3000

app.listen(port, (req, res) => {
    console.log("Server started at port " + port)
})