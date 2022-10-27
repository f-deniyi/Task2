import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(express.json({ extended: false }))
app.use(bodyParser.json({ extended: true, limit: '30mb' }))
const PORT = 5000

app.get('/', (req, res) => {
  const data = {
    slackUsername: 'f3mmie',
    backend: true,
    age: 25,
    bio:
      "Hi, I’m Femi! I'm a fullstack web developer with in-depth experience creating websites that help organizations address their business challenges and meet their needs."
  }
  res.json('200', data)
})

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))
