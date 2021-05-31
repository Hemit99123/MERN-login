// define varibles
const { response } = require('express');
var express = require('express')
var app = express();
var PORT = 5000
var path = require('path')
var options = { beautify: true };
const User = require("./models/User");
const mongoose = require('mongoose')
var DBname = 'MERN'
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//connecting mongodb

mongoose
  .connect("mongodb+srv://hemit:hemitpatel@am-i-jabbed-atlas.rjsx3.mongodb.net/Early_Users_Database?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB cloud is connected sucessfully and ready to be used. Name of database is " + DBname);
  })
  .catch((err) => {
    console.log(err);
  });


//static stuff to get react and the jsx (kind of like html files) to work
app.engine('js', require('express-react-views').createEngine(options));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());



// express routes
app.get('/' , (request, response) => {
    response.render('App')
})

app.get('/about' , (request, response) => {
    response.render('about')
})

app.get('/api/info', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'api.json'));
})
//post/parse the data given in the form!

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const doesUserExitsAlreay = await User.findOne({ username });

    if (doesUserExitsAlreay) {
      res.send("A user with that email already exits please try another one!");
      return;
    }
    //safty stuff
    const hashedPassword = await bcrypt.hash(password, 12);
    const latestUser = new User({ username, password: hashedPassword });

    latestUser
      .save()
      .then(() => {
        res.render("Message");
        return;
      })
      .catch((err) => console.log(err));
  });




app.use(function(request,response){
    response.status(404).render('error404');
});



app.listen(PORT, () => {
    console.log("The server has been started on port " + PORT)
})
