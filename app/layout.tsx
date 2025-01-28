"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";

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
