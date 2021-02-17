import express from "express";
import cl from "../shared/tools/clearMask.mjs";
import routes from "./infra/http/routes/index.mjs";
const app = express();

app.use(express.json());
app.use(routes);

app.get("boleto", (request, response) => {});

app.listen(8080, () => {
  console.log("🚀Server started on port 8080");
});
