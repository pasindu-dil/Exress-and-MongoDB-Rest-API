const express = require('express')
const dotenv = require('dotenv')
const { errorHandler } = require('./middleware/errorMiddleware')
const goalRoutes = require('./routes/goalRoutes.js')

dotenv.config();

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/', goalRoutes);

app.use(errorHandler)

app.listen(port , () => console.log(`Server started on port : ${port}`))