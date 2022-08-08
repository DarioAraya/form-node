const express = require('express');
const app = express();
const engine = require('express-handlebars');
const form = require('./routes/bsaleRoutes.js');
//importando metodo path para tener acceso a carpetas en el proyecto
const path = require('path');
//dando acceso a la carpeta views
app.set("views", path.join(__dirname, "views"));
//dando acceso a la carpeta public
app.use(express.static(__dirname + "/public"));
app.engine('.hbs',engine.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
//middlewares
app.use(express.urlencoded({extended:false}));
console.log(form);
app.use('/',form);

app.listen(3000, ()=>{
    console.log('Serving on port 3000')
});