"use server"
import { hash, verify} from "argon2"
import { z } from "zod"
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";

const loginSchema = z.object({
    username: z.string().nonempty('Username is required'),
    password: z.string().min(8, { message: "Password must be at least 8 characters\n" }).nonempty('Password is required'),
  });

const users = [{ username: "ff", password: await hash( String(process.env.ADMIN_PASS)) }];


export async function login(prevState: { errors: { username?: string[]; password?: string[] } } | undefined, formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));
    
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
  
    const { username, password } = result.data;

    if (username == undefined || password == undefined) {
        console.log("cos")
        return {
            errors: {
              password: ["Invalid email or password1"],
            },
          };
    }

    const user = users.find(  (u) => u.username === username);


    if (!user) {
        console.log("cos2")
        return {
            errors: {
              password: ["Invalid email or password27"],
            },
          };
    }

    const isPasswordValid = await verify(user.password, password);

    if (!isPasswordValid) {
        console.log("cos3")
        return {
            errors: {
              password: ["Invalid email or password3"],
            },
          };
    }

    await createSession(user.password);
    redirect("/");
}

export async function logout(){
  deleteSession();
}