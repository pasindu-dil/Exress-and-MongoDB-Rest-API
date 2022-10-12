const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const goalRoutes = require('./routes/goalRoutes.js')
const userRoutes = require('./routes/userRoutes')

dotenv.config();
connectDB()

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/', [
    goalRoutes,
    userRoutes
]);

app.use(errorHandler)

app.listen(port , () => console.log(`Server started on port : ${port}`))