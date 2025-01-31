"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";

import { SendEmailProps } from "@/types/types";

const validationSchema = Yup.object({
  name: Yup.string().required("Imię jest wymagane"),
  email: Yup.string().email("Nieprawidłowy email").required("Email jest wymagany"),
  phone: Yup.string()
    .matches(/^\d{9}$/, "Numer telefonu musi mieć 9 cyfr")
    .required("Numer telefonu jest wymagany"),
  message: Yup.string().min(15, "Wiadomość musi mieć co najmniej 15 znaków").required("Treść wiadomości jest wymagana"),
});

export default function EmailButton({ email } : { email : string}) {

  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const initialValues = { name: "", email: "", phone: "", message: "" }

  const handleSubmit = async (values: SendEmailProps) => {
    try {
      const response = await fetch("https://formspree.io/f/mzzdrnyj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        alert("Wiadomość została wysłana!");
      } else {
        alert("Coś poszło nie tak, spróbuj ponownie.");
      }
    } catch (error) {
      console.error("Błąd wysyłania formularza:", error);
      alert("Wystąpił błąd przy wysyłaniu formularza.");
    }
  
    setIsPressed(false);
  };

  return (
    <>
        <div className="relative p-[2em]">
            <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    setIsPressed(true);
                    setIsHovered(false);
                }}
                className={`z-20 relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 ${
                    isHovered ? "animate-[wiggle_0.2s_ease-in-out_infinite]" : "animate-pulse"
                }`}>
                <Mail className="text-3xl" />
            </button>
            {isHovered && (
                <motion.div
                className="absolute top-[45px] z-0 bg-purple-500 text-white p-2 rounded-lg pointer-events-none"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 80 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                {email}
                </motion.div>
            )}
        </div>
      <AnimatePresence>
        {isPressed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg"
            >
              <h2 className="text-xl font-bold text-center mb-4 text-purple-600">Wyślij wiadomość</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, dirty, isValid }) => (
                  <Form className="flex flex-col space-y-4">
                    <div>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Imię"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <Field
                        name="phone"
                        type="tel"
                        placeholder="Telefon (9 cyfr)"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <Field
                        name="message"
                        as="textarea"
                        placeholder="Treść wiadomości"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none h-32"
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setIsPressed(false)}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                      >
                        Anuluj
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !dirty || !isValid }
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
                      >
                        Wyślij
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
