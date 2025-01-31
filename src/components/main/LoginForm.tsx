"use client";

import { login } from "@/lib/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <motion.div
      className="flex items-center justify-center min-h-[60vh] px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full max-w-sm p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
          FlowFest Admin Login
        </h1>
        <form action={loginAction} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-purple-700" />
            <input
              id="username"
              name="username"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          {state?.errors?.username && (
            <p className="text-red-500">{state.errors.username}</p>
          )}

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-purple-700" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          {state?.errors?.password && (
            <p className="text-red-500">{state.errors.password}</p>
          )}
          <SubmitButton />
        </form>
      </div>
    </motion.div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={pending}
      type="submit"
      className="w-full py-2 text-white bg-purple-700 rounded font-medium hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-1"
    >
      {pending ? "Logging in..." : "Login"}
    </motion.button>
  );
}
