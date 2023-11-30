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

This sniplet of code has been taking from Expressjs.com itself which will be referenced below [^1]

```
const express = require('express')
const app = express()
```

These first two lines are respectively used to improt Express for use in the .js file and to create an express server instance with the given name "app".

Third line is used to make port as an variable which is not necessary but it makes user to follow and new people to understand easier.

```
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```

Here get helps us to make our routes with first input will be the part which will be the root path as '/', and second input will be a function with 2 values request (req) and response (res). Now inside this code will be run whenever we try to reach the specified URL, in this case it will send 'Hello World!' to the URL.

```
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
This last code is to tell express app to start listening for requests on the specified port. Once it reaches a request it will log the given sentence in the terminal.

Run the app with the following command:

```
node app.js
```