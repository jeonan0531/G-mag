import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AnalyticsTracker from "../components/AnalyticsTracker";
export default function RootLayout() {
  return (
    <>
      <AnalyticsTracker />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
