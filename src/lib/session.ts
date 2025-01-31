import "server-only";
import { cookies } from "next/headers";

export async function createSession(token: string) {
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  
    (await cookies()).set("session", token, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
    });
}

export async function deleteSession() {
    (await cookies()).delete("session");
  }
  


export async function getSession(){
  return (await cookies()).get("session");
}