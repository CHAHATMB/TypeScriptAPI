import express, {
  RequestHandler,
  Request,
  Response,
  NextFunction,
} from "express";
import { validationResult } from "express-validator";
import { validationErrorResponse } from "./utils";
import MeetingDocument from "../models/Meeting/MeetingDocument";
import MeetingCollection from "../models/Meeting/MeetingCollection";
import UserCollection from "../models/User/UserCollection";

export const getMeetings: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // res.status(200).json({ message: "YO" });
  MeetingCollection.find()
    .exec()
    .then((meeting: MeetingDocument[] | null) => {
      if (!meeting) {
        return Promise.reject(res.status(401).end());
      }

      res.status(200).json(meeting);
    })
    .catch((error: Response) => {
      return next(error);
    });
};

export const createMeeting: RequestHandler = async (
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

  const User1 : any = await UserCollection.findById(req.body.uid1).exec();
  const User2 : any = await UserCollection.findById(req.body.uid2).exec();
  
  const meeting: MeetingDocument = new MeetingCollection({
    uid1 : req.body.uid1,
    username1 : User1.username,
    uid2 : req.body.uid2,
    username2 : User2.username,
    date : new Date(req.body.date),
  });

  meeting
    .save()
    // eslint-disable-next-line
    .then((saved: any | null) => {
      return res.status(200).json(saved);
    })
    .catch((error: Response) => {
      return next(error);
    });
};
