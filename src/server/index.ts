import express from "express";
import path from "path";

import index_router from "./routes/index_router";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "..", "..") + "/public"));

app.use("/", index_router);

app.listen(port, (err?: any) => {
  if (err) throw err;
  console.log(`Server is running on http://localhost:${port}`);
});
