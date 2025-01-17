const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

// Static Filesasasasa
app.use(express.static('public'))
//app.use('/css', express.static(__dirname + 'public/css'))
//app.use('/img', express.static(__dirname + 'public/img'))
//app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine



app.set('views', './src/views')//strona
app.set('view engine', 'ejs')//strona

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/xd', (req, res) => {
     res.render("index")
    console.log(4444)

} )


// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))
