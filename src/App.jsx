import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ..
AOS.init();
import Layout from "./components/shared/Layout";

function App() {
  return (
    <>
      <Layout />
      <ToastContainer />
    </>
  );
}

export default App;
