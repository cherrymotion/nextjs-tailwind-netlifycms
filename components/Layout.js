import Link from "next/link";
import Navbar from "./Navbar";

const Layout = (props) => (
  <>
    <div className="max-w-4xl mx-auto px-4 lg:px-0">
      <header className="pt-12">
        <Navbar></Navbar>
      </header>
      <br />
      {props.children}
    </div>
  </>
);

export default Layout;
