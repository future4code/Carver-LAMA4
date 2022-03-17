import { authenticationInfo } from "../types/authenticationInfo";
import * as jwt from "jsonwebtoken";

export const generateToken = (input: authenticationInfo): string => {
    return jwt.sign(
        { id: input.id },
        String(process.env.JWT_KEY),
        { expiresIn: "1h" })
}

export const getToken = (token: string): authenticationInfo | null => {
    try {
        const { id } = jwt.verify(token, String(process.env.JWT_KEY)) as authenticationInfo
        const { userRoles } = jwt.verify(token, String(process.env.JWT_KEY)) as authenticationInfo
        return { id, userRoles }

    } catch (error) {
        return null
    }
}