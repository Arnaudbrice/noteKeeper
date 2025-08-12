import React from "react";
import {Outlet} from "react-router";
import {Bounce, ToastContainer} from "react-toastify";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const Layout = () => {
  return (
    <>
      <div>
        <Header/>
        <ToastContainer
          className=" mt-16 text-lg "
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          limit={2}
          transition={Bounce}
        />
      </div>

      <main className="mx-4">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};
export default Layout;
