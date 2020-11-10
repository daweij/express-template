import * as dotenv from "dotenv";
import app from "./app";

dotenv.config();
const { PORT = 3000 } = process.env;

app().listen(PORT, () => {
  console.log(`listen to http://localhost:${PORT}`);
});
