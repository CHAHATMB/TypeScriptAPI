import {
    RequestHandler,
    Request,
    Response,
    NextFunction,
  } from "express";
  import { validationResult } from "express-validator";
  import { validationErrorResponse } from "./utils";
  import UserDocument from "../models/User/UserDocument";
  import UserCollection from "../models/User/UserCollection";
  
  export const getUsers: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    UserCollection.find()
      .exec()
      .then((users: UserDocument[] | null) => {
        if (!users) {
          return Promise.reject(res.status(401).end());
        }
  
        res.status(200).json(users);
      })
      .catch((error: Response) => {
        return next(error);
      });
  };
  
  export const createUser: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const invalid: Response | false = validationErrorResponse(
      res,
      validationResult(req)
    );
  
    if (invalid) {
      return invalid;
    }
    const user: UserDocument = new UserCollection({
      username : req.body.username,
    });
  
    user
      .save()
      // eslint-disable-next-line
      .then((saved: any | null) => {
        return res.status(200).json(saved);
      })
      .catch((error: Response) => {
        return next(error);
      });
  };