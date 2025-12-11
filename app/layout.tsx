import { ReactNode } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ThemeRegistry from "../theme/ThemeRegistry";
import "aos/dist/aos.css";

export const metadata = {
  title: "Phòng khám Minh Trí - TP.HCM",
  description: "Phòng khám đa khoa hiện đại, đáng tin cậy tại TP.HCM"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
