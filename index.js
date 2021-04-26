const express = require('express');
const path = require('path');
const apiRouter = require('./routers/apiRouter');
const formsRouter = require('./routers/formsRouter');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'forms')));
app.use('/api', apiRouter);
app.use('/web', formsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});