const express = require("express");
const app = express();

//Ruta estática public
app.use(express.static("public"));

// Establecer motor de vista Handlebars
app.set("view engine", "hbs");

// Para hacer uso de partials
const hbs = require("hbs");
const path = require("path");

hbs.registerPartials(path.join(__dirname, "../", "/views/partials"));

// Configure server
app.use(express.json());

// Configure port
const PORT = process.env.PORT || 5000;

// set routes to listen
app.get("/", function (req, res) {
  // response.send("¡Hola mundo!")
  res.render("index", {
    title: "Weather App",
    name: "Jaime González",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Jaime González",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Jaime González",
  });
});

app.get("/weather", (req, res) => {
  res.render("weather", {
    title: "ForecastWeather",
    name: "Jaime González",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Jaime González",
    errorMessage: "Page not found",
  });
});

// Listener
app.listen(PORT, () => {
  console.log("Server running at ", PORT);
});
