const mongoose = require("mongoose");

const app = require("./app");

// const DB_HOST =
//   "mongodb+srv://oleksandr:JlOUAyWLy2k5VjgK@cluster0.d1goug0.mongodb.net/contacts_reader?retryWrites=true&w=majority";
// const { DB_HOST } = require("./config");
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

// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("Database connection successful"))
//   .catch((error) => console.log(error.message));

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
