import Navbar from "./components/Navbar";
import Features from "./components/Features";
import HeadingSection from "./components/HeadingSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen  text-white flex justify-center">
        <div className="max-w-[80%] pt-20 px-4 pb-4">
          <HeadingSection />
          <Features />
          <Workflow />
          <Pricing />
          <Reviews />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
