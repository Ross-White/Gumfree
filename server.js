const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const hbs = exphbs.create({});

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Listening on port' + PORT));
});