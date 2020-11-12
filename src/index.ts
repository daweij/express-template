import * as dotenv from "dotenv";
import { router } from "./app";

dotenv.config();
const { PORT = 3000 } = process.env;

router.listen(PORT, () => {
  console.log(`listen to http://localhost:${PORT}`);
});
