
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./DB');

const boardsRoute = require('./routes/boards.route');
const accessoriesRoute = require('./routes/accessories.route');
const detailRoute = require('./routes/detail.route');
const paymentRoute = require('./routes/payment.route');
const loginRoute = require('./routes/login.route');
const issueRoute = require('./routes/issue.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/boards', boardsRoute);
app.use('/accessories', accessoriesRoute);
app.use('/detail', detailRoute);
app.use('/payment', paymentRoute);
app.use('/admin', loginRoute);
app.use('/issue', issueRoute);
const port = process.env.PORT || 8000;

const server = app.listen(port, function(){
console.log('Listening on port ' + port);
});