import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "express-async-errors";

import { router } from './routes';

import "./database/index";

// @types/express
const app = express();

app.use(express.json());

app.use(router);

// Esse é um middleware de error ele sempre tem que está a baixo das routes
app.use((err: Error, request: Request, response: Response, next: NextFunction) => { 
  if(err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  };

  response.status(500).json({
    status: "error",
    message: "Internal server error" 
  });
});

app.listen(3000, () => console.log('Server inicialited'));
