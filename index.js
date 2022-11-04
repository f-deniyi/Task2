import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const router = express.Router()

const app = express()

app.use(cors())
app.use(express.json({ extended: false }))
app.use(bodyParser.json({ extended: true, limit: '30mb' }))
const PORT = 5000

app.post('/', (req, res) => {
  console.log(JSON.stringify(req.body))
  try {
    const { operation_type, x, y } = req.body
    console.log(operation_type, x, y)
    let result
    switch (operation_type.toLowerCase()) {
      case 'addition':

        result = x + y
        break;

      case 'subtraction':
         result = x - y
        break;


      case 'multiplication':
        console.log('multiplying')
        console.log( x * y)

         result = x * y
        break;


      
    }
    const data = {
      slackUsername: 'f3mmie',
      operation_type,
      result: result
    }
    res.status('200').json({ data })
  } catch (err) {
    res.status(500).json({
      error: 'sOMETHIG IS WORNG'
    })
    console.log(err)
  }
})

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))
