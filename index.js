const express = require('express');
const cors = require('cors')
const startTime = new Date()

const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send(`App up for ${new Date().getTime() - startTime.getTime()} miliseconds (${(new Date().getTime() - startTime.getTime()) / 1000} seconds)`)
});

app.listen(3000, () => {
  console.log('server started');
});
