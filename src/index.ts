import cors from "cors";
import "dotenv/config";
import express from "express";
import { apikey } from "./serverClient";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({
    message: "AI writing assistant server is running",
    apiKey: apikey,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running... on 5000`);
});
