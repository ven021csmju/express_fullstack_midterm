import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

const logDir = "logs";
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

app.get("/api/demo", (req, res) => {
  fs.appendFileSync("logs/access.log", `${new Date().toISOString()}\n`);
  res.json({
    git: "enabled",
    docker: "enabled"
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => console.log("Backend running"));
