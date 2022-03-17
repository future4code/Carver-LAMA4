import * as bcrypt from "bcrypt";

export const generateHash = async (string: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(string, salt)
    return result
}

export const compareThePasswordWithTheHash = async (string: string, hash: string):Promise<boolean> => {
    return bcrypt.compare(string, hash);
}