const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  // console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  // console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

// mongoose
//     .connect(process.env.DATABASE_LOCAL)
//     .then(() => console.log('DB connection successful!'))
//     .catch(err => console.log(err));

mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => null);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  null;
});

process.on('unhandledRejection', err => {
  null
  // console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  // console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
