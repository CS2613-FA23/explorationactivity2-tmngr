# Library selection

Express.js is a back end webapp framework used for web and mobile applications that creates API's. 

# Starting to use pygame

As usual when we start to work with a new library, we need to install the packages required first:

```
npm install express
```

Since coding is something test base where you have to run after each change and working with webapp framework makes this progress a little harder than it should be. Hence, even if it is not required I suggest installing "nodemon" along side of Express:

```
npm install -g nodemon
```

Nodemon's only use here will be that it will rerun the code you are using after each time you save using "ctrl + s"

Now, that we have everything required let us start with the most basic code we can find online sources and go through the necessary parts together.

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```