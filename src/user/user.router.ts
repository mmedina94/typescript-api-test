/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as UserService from "./user.service";
import { User } from "./user.interface";
import { Users } from "./users.interface";

/**
 * Router Definition
 */
export const usersRouter = express.Router();

/**
 * Controller Definitions
 */



usersRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users: Users = await UserService.findAll();

        res.status(200).send({users: users});
    } catch (ex) {
        res.status(404).send({ message: ex.message })
    }
  });