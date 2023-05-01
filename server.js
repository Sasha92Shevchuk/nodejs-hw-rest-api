const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

// mongoose.set('strictQuery', true) - якщо буде повідомлення в терміналі

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1); // команда закриває запущені процеси, 1-закрити з невідомою помилкою
  });
