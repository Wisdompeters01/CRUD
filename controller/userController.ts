import express, {Request, Response } from "express"
import mongoose from "mongoose"

export const createUser = (req: Request, res: Response) => {
    try {
        const { Name, email, password } = req.body;

        const user = await userModel.create({
            Name,
            email,
            password
        })

        return res.status(201).json({
            message: "User successfully created",
            user,
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error User not created"
        })
    }
}