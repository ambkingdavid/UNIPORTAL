const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const SQLiteStore = require('connect-sqlite3')(session);
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const indexRouter = require('./routes/indexRoutes');
const authRouter = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' }),
  cookie: {
    httpOnly: true,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.authenticate('session'));

const swaggerSpec = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', indexRouter);
app.use('/', authRouter);

app.use((req, res) => {
  res.status(404).send({ error: 'Not found' });
});

app.listen('1245', () => {
  console.log('server running on port 1245');
});

module.exports = app;
