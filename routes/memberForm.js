import express from "express";
import memberController from "../controller/memberController.js";

const memberFormRouter = express.Router();

memberFormRouter
    .route('/')
    .get(memberController.getForm)
    .post(memberController.addMember)

export default memberFormRouter