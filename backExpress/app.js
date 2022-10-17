const express = require("express");
const app = new express();
const sequelize = require("./database/db");
const User = require("./database/models/User");

//Setting
app.set("appNae", "conect for sequalize npm");
app.set("port", "2022");

app.use(express.json());
//route
app.get("/", function (req, res) {
  res.send("hola sequalize");
  //   User.create({
  //     name: "anonimo2",
  //     username: "anoni",
  //   }).then((User) => {
  //     res.json(User);
  //   });
  User.find({
    id: 1,
  }).then((User) => {
    res.json(User);
  });
});
console.log(User)

// server

app.listen(app.get("port"), function (req, res) {
  console.log("server en puerto", app.get("port"), "escuchandoooooo");
  //conexion bd
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("conexion exitosa a bd lavorar");
    })
    .catch((error) => {
      console.log("Error : ", error);
    });
});
