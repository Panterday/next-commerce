import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <footer style={{ height: "2vh" }}>This is my footer from a layout</footer>
    </div>
  );
};

export default Layout;
