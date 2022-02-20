import { Request, Response, NextFunction } from "express";
export declare const CreatePost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const Test: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const GetPost: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
