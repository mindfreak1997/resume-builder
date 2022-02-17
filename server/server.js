const express = require('express')
const cors = require('cors')


const app = express()


// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers
const router = require('./routes/resumeRouter')
app.use('/api/resume', router)



//port

const PORT = process.env.PORT || 3055

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
