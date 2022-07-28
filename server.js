import express from 'express'
const app = express()
import notFoundMiddleware from './middleware/not-found.js' //middleware

app.get('/', (req,res) => {
    res.send("Welcome")
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

app.listen(port, () => console.log('server is listening on port ${port}...'))