import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
