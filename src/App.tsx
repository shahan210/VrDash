import Navbar from "./components/Navbar";
import Video1 from "./assets/video1.mp4";
import Video2 from "./assets/video2.mp4";
function App() {
  return (
    <>
      <Navbar />
      <div className="max-h-screen  text-white flex justify-center">
        <div className="container max-w-[80%] flex flex-col justify-center items-center mt-44 pt-20 px-4 pb-4">
          <div className="heading">
            <h1 className="text-7xl font-semibold">
              VirtualR build tools <span className="text-orange-500">for</span>{" "}
            </h1>
            <h1 className="devlop">developers</h1>
          </div>
          <div className="heading !max-w-[70%] !mt-14">
            <p className="text-center text-lg text-[#737373]">
              Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get
              started today and turn your imagination into immersive reality!
            </p>
          </div>
          <div className="heading !max-w-[50%] !mt-14">
            <div className="flex gap-8 justify-center items-center">
              <button className="Create hover:!scale-105 !py-3 !px-6">Start for free</button>
              <button className="SignIn hover:!scale-105 !py-3 !px-6">Documentation</button>
            </div>
          </div>npm install lucide
          <div className="heading !mt-10">
            <div className="flex mt-10 justify-center gap-6">
              <div className="rounded-lg w-1/2 border border-orange-500 overflow-hidden mx-2 my-4">
                <video autoPlay loop muted src={Video1}></video>
              </div>
              <div className="rounded-lg w-1/2 border border-orange-500 overflow-hidden  mx-2 my-4">
                <video autoPlay loop muted src={Video2}></video>
              </div>
            </div>
          </div>
          <div className="heading !mt-10">
            <p className="feature">Feature</p>
            <div className="flex  justify-center">
              <p className="mt-10 text-6xl font-n">
                Easily build <span className="devlop !font-normal">your code</span>{" "}
              </p>
              <div className=" grid grid-cols-3">
                <div>
                  <div>npm install lucide
                    <p>Drag-and-Drop Interface</p>
                  </div>
                  <div>
                    <p className="text-[#737373]">
                      Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.
                    </p>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
