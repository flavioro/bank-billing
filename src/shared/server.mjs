import express from "express";
import routes from "./routes/index.mjs";
const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log("🚀Server started on port 8080");
});
