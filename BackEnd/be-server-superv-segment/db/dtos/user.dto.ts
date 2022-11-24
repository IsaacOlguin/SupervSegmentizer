import { ObjectId } from "mongoose";

/**
 *  User instance to be stored
 */
 export interface AddUserDTO {
    name: string;
    email: string;
    password: string;
    owner_of_docs: Array<ObjectId>;
    valid_until: Date;
    token: string;
    failed_attemps: number;
    is_blocked: boolean;
  }