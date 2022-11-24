import { IUser, userModel } from "../models/user";
import { ObjectId } from "mongoose";
import { AddUserDTO } from "../dtos/user.dto";

export default class UserService {
    /**
     * Gets all the users from the database
     * @returns all users
     */

    static async getAllUsers(): Promise<(IUser & { _id: ObjectId})[]> {
        return await userModel.find().exec();
    }


    /**
     * Get user by their email
     * 
     * @param email - user's email
     * @param includePassword - boolean representing whether it's desired to get or not the password
     * 
     * @return user's information
     */
    static async getUserByEmail(
        email: string,
        includePassword: boolean = false
    ): Promise<(IUser & { _id: ObjectId }) | null> {
        return includePassword
                ? await userModel.findOne({ email }).select("+password").exec()
                : await userModel.findOne({ email }).exec();
    }

    /**
     * Add the given user to the database
     * 
     * @param user - user instance
     * @returns userAdded
     */
    static async addUser(user: AddUserDTO): Promise<IUser> {
        let userAdded: IUser | undefined = undefined;
        userAdded = await userModel.create(user);
        return userAdded;
    }
}