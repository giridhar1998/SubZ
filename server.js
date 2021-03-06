import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './db/connect.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js' 
import errorMiddleware from './middleware/error-handler.js'

app.get('/', (req,res) => {
    res.send("Welcome")
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log('server is listening on port ${port}...')
        })
    } catch (error) {
        console.log('error')
    }
}

start()