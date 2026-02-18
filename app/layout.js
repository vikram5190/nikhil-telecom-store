export const metadata = {
  title: "Nikhil Telecom",
  description: "Online Mobile Accessories Store",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

