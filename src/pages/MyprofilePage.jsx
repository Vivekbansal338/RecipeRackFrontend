// import React, { useState } from "react";
// import "./MyprofilePage.css";
// export function MyprofilePage() {
//   const [logo, setLogo] = useState("logo.png");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogoChange = (event) => {
//     setLogo(event.target.value);
//   };

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // TODO: Save changes
//   };

//   return (
//     <div>
//       <header>
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//           <input type="file" onChange={handleLogoChange} />
//         </div>
//       </header>
//       <main>
//         <h1>Profile</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={handleNameChange}
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <button type="submit">Save</button>
//         </form>
//       </main>
//       <footer>
//         <p>&copy; 2021 My Company</p>
//       </footer>
//     </div>
//   );
// }

// MyProfilePage.js

import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearUserId as logout } from "../redux/UseridSlice";
// import { useAuth } from "../auth";
// import { updateProfile } from "../api";

import "./MyprofilePage.css";

export function MyprofilePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.useriddata);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const updatedData = new FormData();
    // updatedData.append("name", formData.name);
    // updatedData.append("email", formData.email);
    // updatedData.append("image", image);

    // await updateProfile(updatedData);
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>

      {user.image && (
        <img src={user.image} alt="Profile" className="profile-img" />
      )}

      <form className="profile-form" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>

        <button type="submit">Update Profile</button>

        <button onClick={logout}>Logout</button>
      </form>
    </div>
  );
}
