import express from "express";
import profile from "./profiles_data.mjs";

const app = express();
const port = 4000;

app.get("/profiles", (req, res) => {
  return res.json(profile);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
