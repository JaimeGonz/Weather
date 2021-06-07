const express = require("express");
const app = express();

app.use(express.static("public"));

// Configure server
app.use(express.json());

app.set("view engine", "ejs");

// Configure port
const PORT = process.env.PORT || 5000;

// Listener
app.listen(PORT, () => {
  console.log("Server running at ", PORT);
});

// set routes to listen
app.get("/", function (req, res) {
  // response.send("¡Hola mundo!")
  res.render("index", {
    message: "Weather App.",
  });
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/help", (req, res) => {
  res.send("Help");
});

app.get("/weather", (req, res) => {
  res.send("Weather Forecast");
});
