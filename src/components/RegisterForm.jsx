
// import { useState } from "react";
// import { motion } from "framer-motion";

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     teamName: "",
//     teamLeader: "",
//     player1: "",
//     player2: "",
//     player3: "",
//     player4: "",
//     player5: "",
//   });

//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const isFormValid = () => {
//     return Object.values(formData).every((val) => val.trim() !== "");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isFormValid()) {
//       setError("All fields are required.");
//       return;
//     }

//     const {
//       teamName,
//       teamLeader,
//       player1,
//       player2,
//       player3,
//       player4,
//       player5,
//     } = formData;

//     // ✅ 1. Send form data to a WhatsApp number
//     const message = `🔥 PUBG Registration 🔥
// Team Name: ${teamName}
// Team Leader: ${teamLeader}
// Players:
// 1. ${player1}
// 2. ${player2}
// 3. ${player3}
// 4. ${player4}
// 5. ${player5}`;

//     const whatsappNumber = "919544847929"; // Replace with your number (no + or spaces)
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappURL, "_blank");

//     // ✅ 2. Show success message
//     setSubmitted(true);
//     setError("");
//   };

//   if (submitted) {
//     return (
//       <motion.div
//         className="text-center space-y-4 mt-6 bg-black bg-opacity-70 p-6 rounded-xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <h2 className="text-2xl font-bold text-green-400">
//           🎉 Submitted Successfully!
//         </h2>
//         <p className="text-white">
//           Your team data has been send!!.
//         </p>

//         {/* ✅ 3. Show WhatsApp Group Link */}
//         <a
//           href="https://chat.whatsapp.com/JSoFGd2ptA5LjzEIsY72kX" // 🔁 Replace this!
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
//         >
//           👉 Join WhatsApp Group
//         </a>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.form
//       className="w-full max-w-md mt-8 space-y-4 bg-black bg-opacity-60 p-6 rounded-lg shadow-lg border border-orange-500"
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <h3 className="text-2xl text-orange-500 font-extrabold mb-4 text-center tracking-wide">
//         Team Registration
//       </h3>

//       {["teamName", "teamLeader", "player1", "player2", "player3", "player4", "player5"].map(
//         (field, index) => (
//           <input
//             key={index}
//             type="text"
//             name={field}
//             placeholder={field
//               .replace(/([A-Z])/g, " $1")
//               .replace(/^./, (str) => str.toUpperCase())}
//             value={formData[field]}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
//           />
//         )
//       )}

//       {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

//       <button
//         type="submit"
//         className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-md shadow-md transition"
//       >
//         Submit
//       </button>
//     </motion.form>
//   );
// };

// export default RegisterForm;





// import { useState } from "react";
// import { motion } from "framer-motion";

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     teamName: "",
//     teamLeader: "",
//     player1: "",
//     player2: "",
//     player3: "",
//     player4: "",
//     player5: "",
//   });

//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const isFormValid = () => {
//     return Object.values(formData).every((val) => val.trim() !== "");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isFormValid()) {
//       setError("All fields are required.");
//       return;
//     }

//     const {
//       teamName,
//       teamLeader,
//       player1,
//       player2,
//       player3,
//       player4,
//       player5,
//     } = formData;

//     // ✅ Send form data to a WhatsApp number (without showing the recipient)
//     const message = `🔥 PUBG Registration 🔥 Team Name: ${teamName} Team Leader: ${teamLeader} Players: 1. ${player1} 2. ${player2} 3. ${player3} 4. ${player4} 5. ${player5}`;
//     // const whatsappNumber = "919544847929"; 
//     const whatsappNumber = "918156842631";
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

//     // Open WhatsApp URL in a new tab to send the message
//     window.open(whatsappURL, "_blank");

//     // ✅ Show success message
//     setSubmitted(true);
//     setError("");
//   };

//   if (submitted) {
//     return (
//       <motion.div
//         className="text-center space-y-4 mt-6 bg-black bg-opacity-70 p-6 rounded-xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <h2 className="text-2xl font-bold text-green-400">
//           🎉 Submitted Successfully!
//         </h2>
//         <p className="text-white">
//           Your team data has been sent!!
//         </p>

//         {/* ✅ Show WhatsApp Group Link */}
//         <a
//           href="https://chat.whatsapp.com/JSoFGd2ptA5LjzEIsY72kX" // 🔁 Replace this!
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
//         >
//           👉 Join WhatsApp Group
//         </a>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.form
//       className="w-full max-w-md mt-8 space-y-4 bg-black bg-opacity-60 p-6 rounded-lg shadow-lg border border-orange-500"
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <h3 className="text-2xl text-orange-500 font-extrabold mb-4 text-center tracking-wide">
//         Team Registration
//       </h3>

//       {["teamName", "teamLeader", "player1", "player2", "player3", "player4", "player5"].map(
//         (field, index) => (
//           <input
//             key={index}
//             type="text"
//             name={field}
//             placeholder={field
//               .replace(/([A-Z])/g, " $1")
//               .replace(/^./, (str) => str.toUpperCase())}
//             value={formData[field]}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
//           />
//         )
//       )}

//       {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

//       <button
//         type="submit"
//         className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-md shadow-md transition"
//       >
//         Submit
//       </button>
//     </motion.form>
//   );
// };

// export default RegisterForm;





import { useState } from "react";
import { motion } from "framer-motion";

const RegisterForm = ({ scrollToRef, setShowForm }) => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeader: "",
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    // player5: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return Object.values(formData).every((val) => val.trim() !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("All fields are required.");
      return;
    }

    const {
      teamName,
      teamLeader,
      player1,
      player2,
      player3,
      player4,
      // player5,
      
    } = formData;

    const message = `🔥 PUBG Registration 🔥 Team Name: ${teamName} Team Leader: ${teamLeader} Players: 1. ${player1} 2. ${player2} 3. ${player3} 4. ${player4} `;
    // 5. ${player5}
    const whatsappNumber = "919544847929";
    // const whatsappNumber = "918156842631";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setError("");
  };

  const handleClose = () => {
    setShowForm(false);
    setTimeout(() => {
      scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (submitted) {
    return (
      <motion.div
        className="text-center space-y-4 mt-6 bg-black bg-opacity-70 p-6 rounded-xl relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-green-400">
          🎉 Submitted Successfully!
        </h2>
        <p className="text-white">Your team data has been Registered!!</p>
        <a
          href="https://chat.whatsapp.com/JSoFGd2ptA5LjzEIsY72kX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
        >
          👉 Join WhatsApp Group
        </a>
      </motion.div>
    );
  }

  return (
    <motion.form
      className="w-full max-w-md mt-8 space-y-4 bg-black bg-opacity-60 p-6 rounded-lg shadow-lg border border-orange-500 relative"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-2 right-2 text-red-400 hover:text-red-600 text-lg font-bold transition"
        aria-label="Close form"
      >
        ✖
      </button>

      <h3 className="text-2xl text-orange-500 font-extrabold mb-4 text-center tracking-wide">
        Team Registration
      </h3>

      {[
        "teamName",
        "teamLeader",
        "player1",
        "player2",
        "player3",
        "player4",
        // "player5",
      ].map((field, index) => (
        <input
          key={index}
          type="text"
          name={field}
          placeholder={field
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
          value={formData[field]}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
        />
      ))}

      {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

      <button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-md shadow-md transition"
      >
        Submit
      </button>
    </motion.form>
  );
};

export default RegisterForm;
