import React from "react";

export const metadata = {
  title: "LingoVids",
  description: "Multilingual Video Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
