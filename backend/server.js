
import config from "./src/config/config.js";
import express from "express";
import cookieParser from "cookie-parser";
import ConnectDB from "./src/db/db.js";
import authRoutes from "./src/routes/auth.routes.js";


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
const port = config.PORT;



const startServer = async () => {
  try {
    await ConnectDB();

    const server = app.listen(port, () => {
      console.log(`Server is running on port number ${port}`);
    });

    server.on("error", (error) => {
      console.error("Server startup failed:", error.message);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exitCode = 1;
  }
};

startServer();
