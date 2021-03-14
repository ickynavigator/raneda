import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { connectFIRE, connectMONGO, connectMAILCHIMP } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import configRoutes from "./routes/configRoutes.js";

const PORT = process.env.PORT || 5000;
dotenv.config();
// connectFIRE();
connectMONGO();
connectMAILCHIMP();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  app.get("/", (req, res) => {
    res.send("API IS RUNNING...");
  });
}

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/config", configRoutes);

const folder = path.resolve();
app.use("/uploads", express.static(path.join(folder, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(folder, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(folder, "..", "frontend", "build", "index.html"))
  );
}

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `\nServer running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
