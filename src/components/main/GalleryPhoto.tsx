"use client";

import { lazy } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryPhotoProps } from "@/types/types";

const CldImage = lazy(() => import("next-cloudinary").then( module => {
  return { default: module.CldImage }
}))

export default function GalleryPhoto({ id, width = 600, height = 400 }: GalleryPhotoProps) {
    
  const [isLoading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        onClick={() => setShowModal(true)}
        className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-md cursor-pointer"
      >
        <CldImage
          src={id}
          alt="Galeria FlowFest"
          width={width}
          height={height}
          className={`h-full w-full object-cover duration-700 ease-in-out ${
            isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
      </motion.div>

      <AnimatePresence>
        {showModal && (isLoading == false) && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={() => setShowModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CldImage
                src={id}
                alt="Pełny widok zdjęcia"
                width={width * 2}
                height={height * 2}
                className="mx-auto max-w-[90%] max-h-[90%] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
