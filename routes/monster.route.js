import express from "express";
import { getMonsters, getMonster, addMonster, updateMonster, deleteMonster } from "../controllers/monster.controller.js";
const router = express.Router();

router.get("/", getMonsters);
router.get("/:id", getMonster);
router.post("/", addMonster);
router.patch("/:id", updateMonster);
router.delete("/:id", deleteMonster);

export default router;