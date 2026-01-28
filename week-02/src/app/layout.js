export const metadata = {
  title: "shop.my",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body bgcolor="red" style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
