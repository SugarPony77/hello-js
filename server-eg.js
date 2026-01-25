const express = require('express'); //import framework
const app = express(); //create app instance
const port = 4000; //define port

app.use(express.json()); //middleware to parse JSON

app.post('/echo', (req, res) => { //routing
  res.json({ echoed: req.body }); //send back received JSON
});

app.get('/', (req, res) => { //routing
  res.send('Hello, from my Express server! \n This is how the big dawgs do it bruh. \n Catch up okes!!!!!' )  //send response
})

app.listen(port, () => { //start server
  console.log(`Server is alive on port ${port}!`)
})
