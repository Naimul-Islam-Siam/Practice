export default function RootLayout({ children }) {
   return (
      <html>
         <head>
            <title>Nested Layouts by example</title>
         </head>

         <body>{children}</body>
      </html>
   );
};