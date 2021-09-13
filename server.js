const express = require('express');
const { runMode } = require('./global');
const app = express();
const PORT = 8080;

app
  .set('view engine', 'pug')
  .use(express.static('public'))
  .use('/student', require(`./routes/${runMode}/student`));

app.listen(PORT, () => {
  console.log(`App started listening at http://localhost:${PORT}`);
});
