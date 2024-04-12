"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";

// interface Metadata {
//   title: string;
//   description: string;
// }

// export const metadata: Metadata = {
//   title: "TypeX",
//   description: "Generated by create next app",
// };

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <html lang="en">
        <body>
          {children}
          <Link className="routes" href="/contacts">
            Home/Back
          </Link>
        </body>
      </html>
    </>
  );
}
