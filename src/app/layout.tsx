import React from "react";

export const metadata = {
  title: "LingoVids",
  description: "LingoVids Platform",
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
