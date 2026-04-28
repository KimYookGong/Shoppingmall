import { AppProvider } from "../context/AppContext";
import GlobalUI from "../components/GlobalUI";
import "./globals.css";

export const metadata = {
  title: "Minimalist Modern E-commerce",
  description: "A premium nylon metal textured gallery-style shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
          <GlobalUI />
        </AppProvider>
      </body>
    </html>
  );
}
