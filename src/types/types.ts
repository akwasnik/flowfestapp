import { StaticImageData } from "next/image";
import React from "react";

export interface SendEmailProps{
    name: string,
    email: string,
    phone: string,
    message: string
}

export interface AdminLoginProps{
    username: string,
    password: string
}

export interface GalleryPhotoProps {
    id: string;
    width?: number;
    height?: number;
  }

export interface DataContextProps{
    testimonials : { name: string, feedback: string, image: StaticImageData}[],
    features : { title: string, description: string, icon?: React.JSX.Element}[],
    steps: { title: string, description: string, icon?: React.JSX.Element}[]
}