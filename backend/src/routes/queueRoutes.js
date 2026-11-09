import {Router} from "express";import {joinQueue} from "../controllers/queueController.js";const r=Router();r.post("/",joinQueue);export default r;
