import { Poppins } from "next/font/google";
import "./globals.css";

// Import Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // You can adjust weights as needed
  variable: "--font-poppins",
});

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and Poppins font",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
