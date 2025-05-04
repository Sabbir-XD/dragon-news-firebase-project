import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header/Header";
import Marque from "../components/Marque/Marque";
import LeftAside from "../layout/LeftAside";
import RightAside from "../layout/RightAside";
import { Menu } from "lucide-react"; // or any icon you use
import Loading from "../components/Loding/Loading";

const Root = () => {
  const [showLeft, setShowLeft] = useState(false);
  const {state} =useNavigation();
  return (
    <section>
      <div className="w-11/12 mx-auto space-y-3">
        <Header />
        <Marque />
        <Navbar />
      </div>

      {/* Mobile button to open category */}
      <div className="md:hidden w-11/12 mx-auto flex justify-between items-center mt-4">
        <button
          onClick={() => setShowLeft(!showLeft)}
          className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded shadow"
        >
          <Menu size={30} />
          <span>Categories</span>
        </button>
      </div>

      {/* Mobile category drawer */}
      {showLeft && (
        <div className="md:hidden w-11/12 mx-auto my-3">
          <LeftAside />
        </div>
      )}

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
        {/* Desktop Left Sidebar */}
        <div className="hidden md:block md:col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-6">
          {state == "loading" ? <Loading/> : <Outlet />}
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block md:col-span-3 sticky top-0 h-fit">
          <RightAside />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Root;
