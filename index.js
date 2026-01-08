import express from "express";

const app = express();

app.post("/webhook", (req, res) => {
  res.status(200).send("OK");
});

app.get("/webhook", (req, res) => {
  res.status(200).send("OK");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Webhook running");
});
