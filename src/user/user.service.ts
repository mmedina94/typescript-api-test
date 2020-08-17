/**
 * Data Model Interfaces
 */
import { User } from "./user.interface";
import { Users } from "./users.interface";


/**
 * In-Memory Store
 */

const users: Users = {
    1: {
        id: "",
        name: "Matas",
        lastname: "Medina",
        email: "email",
        password: "password",
        firebaseToken: ""
    }
}

/**
 * Service Methods
 */

export const findAll = async (): Promise<Users> => {
    return users;
}

export const create = async (user: User): Promise<void> => {
    const id = new Date().valueOf();

    users[id] = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        firebaseToken: user.firebaseToken
    }
}