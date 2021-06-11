const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helmet = require('helmet');

const app = express();
app.use(helmet({
    contentSecurityPolicy: false,
}));

const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
        expiration: 24 * 60 * 60 * 1000,
    })
};

app.use(session(sess));

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