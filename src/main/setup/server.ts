import express from 'express'
import 'dotenv/config'

const app = express()
app.use(express.json())

app.listen(process.env.PORT ?? 3333, () => {
  console.log(`http server running on port ${process.env.PORT ?? 3333}`)
})
