import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import notFoundMiddleware from './middleware/not-found.js' //middleware
import errorMiddleware from './middleware/error-handler.js' //middleware

app.get('/', (req,res) => {
    res.send("Welcome")
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

app.listen(port, () => console.log('server is listening on port ${port}...'))