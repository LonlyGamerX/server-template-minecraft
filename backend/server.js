const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5431;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

async function connectDatabase() {
  try {
    const db = new Database("./db/store.db");
    console.log("Loaded store.db");
    return db;
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1);
  }
}

async function startServer() {
  const db = await connectDatabase();

  app.use("/server/v1/categories", require("./routes/categories.routes"));
  app.use("/server/v1/products", require("./routes/products.routes"));

  app.get("/", (req, res) => {
    res.status(200).json({
      info: {
        message: "Welcome to the mc server template backend API!",
        port: port,
      },
      endpoints: {
        products: `http://localhost:${port}/server/v1/products`,
        user: `http://localhost:${port}/server/v1/users`,
      },
      imagepath: {
        users: "http://localhost:5333/images/users/",
        products: "http://localhost:5333/images/products/",
      },
    });
  });

  app.listen(port, () => {
    console.log("The API is successfully running.");
    console.log(`Listening on http://localhost:${port}`);
  });

  // Handle errors during server startup
  process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
    process.exit(1);
  });
}

startServer();
