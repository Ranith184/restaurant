import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}