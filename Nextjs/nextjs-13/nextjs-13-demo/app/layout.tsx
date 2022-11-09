import "./globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};