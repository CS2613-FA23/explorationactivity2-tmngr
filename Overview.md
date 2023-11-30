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

# What are the functionalities of the package/library?
1. Routing: refers to how an application’s endpoints (URIs) respond to client requests. [^2]

2. Middleware: Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. [^3]

3. HTTP Methods: Express supports methods that correspond to all HTTP request methods: get, post, and so on. [^4]

and more. 

# When was it created?
"Express was born in 2010 when Node.js was still a new and exciting technology that promised to revolutionize web development. Node.js allowed developers to write web applications using JavaScript, the language of the web, and to use asynchronous and event-driven programming, which enabled high performance and scalability. However, Node.js also lacked some of the features and abstractions that web developers were used to, such as routing, templating, middleware, and error handling. That’s where Express came in." [^5]

# Why did you select this package/library?
I have been working with Python and Java mostly for school and work projects and one of my projects in the lab required me to work with JS to connect and work with python before. Which is the reason my interest in JS started, along side with this I have been meaning to improve my knowledge more with working web/app designing for future developing purposes. Before deciding on Express.js I have looked at HTML and CSS a little to see if I can make this project on something related to them which led me to webapp framework and this way I have seen both front and back end.

# How did learning the package/library influence your learning of the language?
In this course I was already getting used to and getting more interested on learning node.js, with this package it has been more clear to me that node.js is very simple language that rely on outside packages. This made the language high-efficient and high-performance which is very interesting language. It is nice to compare something like node.js to octave where most stuff included inside.

# How was your overall experience with the package/library? 

The package Express is a simple package to use. I had close none expreince with any kind of backend and it took me roughly 2 days to understand the basic and I still feel like I can understand the rest as easy after spending time on it. Express servers can be as simple as user wants, and that is one of the main reasons why I will continue to use and learn more of Express.js. I would recommend this package to anyone who is interested in nodejs development or web development.

<sub>
References:
</sub>

[^1]: https://expressjs.com/en/starter/hello-world.html
[^2]: https://expressjs.com/en/guide/routing.html
[^3]: https://expressjs.com/en/guide/using-middleware.html
[^4]: https://expressjs.com/en/guide/routing.html
[^5]: https://medium.com/@ryanneilparker/the-notable-history-of-express-js-6869ba4fcd25