import express from "express";
import chatTemp from "../templates/chat";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("chat.ejs");
});

export default router;
