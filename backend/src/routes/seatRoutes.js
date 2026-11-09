import {Router} from "express";import {getSeats,seedSeats} from "../controllers/seatController.js";const r=Router();r.get("/",getSeats);r.post("/seed",seedSeats);export default r;
