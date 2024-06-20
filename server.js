import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { userId, password } = req.body;

  if (userId === "priyanshu.negi@gmail.com" && password === "Admin123") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Wrong credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
