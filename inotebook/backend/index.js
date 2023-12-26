const connecttoMongo = require('./db');

const express = require('express')

connecttoMongo();
const app = express()
const port = 5000   // changed port to 5000 as react app wil run on port 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//available routes
app.use(express.json());                      // middle ware to read content from request ( input json)

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})




