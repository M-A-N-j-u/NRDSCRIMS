// import { useState, useEffect } from "react";
// import RegisterForm from "./components/RegisterForm";
// import { motion } from "framer-motion";

// function App() {
//   const [showForm, setShowForm] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [isAllowed, setIsAllowed] = useState(false);

//   useEffect(() => {
//     const today = new Date().getDay();
//     setIsAllowed(today >= 0 && today <= 6);
//   }, []);

//   return (
//     <div className={`${isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-600 to-indigo-700 text-white"} min-h-screen flex flex-col items-center justify-center p-4`}>
//       <div className="absolute top-4 right-4">
//         <button
//           onClick={() => setIsDark(!isDark)}
//           className="bg-white text-black px-3 py-1 rounded-lg shadow hover:bg-gray-100"
//         >
//           {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
//         </button>
//       </div>

//       {!showForm ? (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-center space-y-6"
//         >
//           <h1 className="text-4xl font-bold">PUBG Tournament</h1>
//           <p className="text-lg">Register your squad for this week’s battle!</p>

//           {isAllowed ? (
//             <button
//               onClick={() => setShowForm(true)}
//               className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition-all duration-200"
//             >
//               Register Now
//             </button>
//           ) : (
//             <p className="text-red-300 font-semibold">Registration not available today.</p>
//           )}
//         </motion.div>
//       ) : (
//         <RegisterForm isDark={isDark} />
//       )}
//     </div>
//   );
// }

// export default App;












import { useState, useEffect } from "react";
import RegisterForm from "./components/RegisterForm";
import { motion } from "framer-motion";
import bgpubg from '../src/assets/images/bgpubg.jpg';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const today = new Date().getDay(); // Sunday = 0, Saturday = 6
    setIsAllowed(today >= 0 && today <= 6);
  }, []);

  return (
    // <div
    //   className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center text-white px-4 py-10"
    //   style={{
    //     backgroundImage: `url('bgpubg')`, 
    //     backgroundColor: "#000000",
    //   }}
    // >
    <div
  className="min-h-screen w-full flex flex-col items-center justify-center bg-contain bg-center text-white px-4 py-10"
  style={{
    backgroundImage: `url(${bgpubg})`, // Use the imported image variable here
    backgroundRepeat:"no-repeat",
    backgroundColor: "#000000",
  }}
>
      {!showForm ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl space-y-6"
        >
          <p className="mt-2 font-bold">DICOMAN ESPORTS <br /> <span className="font-bold">PRESENTS</span></p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600">
            DC x NRD BGMI SCRIMS
          </h1>
          <h1 className="text-xl mt-5 uppercase font-bold text-orange-500 tracking-widest">
            Season 04
          </h1>

          <div className="border-2 border-white py-3 px-6 inline-block">
            <span className="text-xl md:text-2xl font-semibold">REGISTRATION STARTED</span>
          </div>
          <p className="mt-2 font-medium">Co-powered by <span className="font-bold">NRD ESPORTS</span></p>
          <p className="text-orange-400 text-lg font-bold">
            Weekly ( Sunday to Saturday )
          </p>

          {isAllowed ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-orange-600 text-white text-lg font-semibold px-8 py-3 rounded-md shadow-md hover:bg-orange-700 transition"
            >
              Register Now
            </button>
          ) : (
            <p className="text-red-400 font-semibold">Registration not available today.</p>
          )}

          {/* Placeholder for QR or image if needed */}
          {/* <div className="mt-6">
            <div className="w-40 h-40 mx-auto bg-white rounded p-2 flex items-center justify-center text-black font-semibold text-sm">
              QR Placeholder
            </div>
          </div> */}

          {/* <div className="flex justify-center gap-6 mt-4 text-sm text-orange-300">
            <span>@NRD_ESPORTS</span>
            <span>@DICOMAN_ESPORTS</span>
          </div> */}

<div className="flex justify-center gap-6 mt-4 text-sm text-orange-300">
  <a
    href="https://www.instagram.com/nrd_esports_?igsh=NXYwZzZjejc3dHhl"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    @NRD_ESPORTS
  </a>
  <a
    href="https://www.instagram.com/dicoman_esports?igsh=MWdqYzBkc3pyMmpieQ=="
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    @DICOMAN_ESPORTS
  </a>
</div>


          
        </motion.div>
      ) : (
        <RegisterForm />
      )}
    </div>
  );
}

export default App;
