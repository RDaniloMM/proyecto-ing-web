import { League_Spartan, Lato } from "next/font/google";

export const LeagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
  variable: "--font-LeagueSpartan",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Lato",
});