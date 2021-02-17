import express from "express";
// import cors from 'cors';
// import { errors } from 'celebrate';
// import 'express-async-errors';

// import AppError from '@shared/errors/AppError';
import routes from "./routes";
const app = express();

// app.use(cors());
app.use(express.json());
app.use(routes);

// app.use(errors());

// app.use((err, request, response, _) => {
//   return response.status(500).json({
//     status: "error",
//     message: "Internal Server error",
//   });
// });

app.listen(8080, () => {
  console.log("🚀Server started on port 8080");
});
