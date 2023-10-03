import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [UserData, setUserData] = useState({});
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const callProfilePage = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api-patient/profiledetails",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      setUserData(data);
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/signin");
    }
  };

  useEffect(() => {
    callProfilePage();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    try {
      const response = await fetch(
        "http://localhost:3000/api-patient/upload-images",
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      if (response.ok) {
        alert("File uploaded successfully.");
      } else {
        alert("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-4 sm:p-8 lg:p-12 xl:p-24">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div>
          <div className="md:flex-shrink-0">
            {/* Profile Photo */}
            <img
              className="w-full max-w-full h-auto mx-auto rounded-sm md:max-w-56 md:h-80"
              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="Profile"
            />
          </div>
          <div className="p-4 sm:p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Patient Profile
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
              {`${UserData.firstName} ${UserData.lastName}`}
            </h2>
            <p className="mt-2 text-gray-500">
              <strong>Email:</strong> {UserData.email}
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Phone:</strong> {UserData.phoneNumber}
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Date of Birth:</strong>{" "}
              {UserData.dateOfBirth ? "None" : ""}
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Gender:</strong> {UserData.gender ? "None" : ""}
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Address:</strong> {/* Display address here */}
            </p>

            {/* Medical Records */}
            <div className="mt-4 mb-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
                Medical Records :
              </h3>
              <div className="my-4">
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  onChange={handleImageChange}
                  required
                />
                <label
                  htmlFor="file-upload"
                  className="rounded-md text-center bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer block mb-2"
                >
                  Choose
                </label>
                <textarea
                  placeholder="Enter Description releted to Medical Report ..."
                  value={description}
                  onChange={handleDescriptionChange}
                  className="rounded-md w-full bg-gray-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black block mb-2"
                  rows="4" // Set the number of rows for the textarea
                ></textarea>

                <button
                  type="button"
                  onClick={handleUpload}
                  className="rounded-md w-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black block"
                >
                  Upload
                </button>
                <Link
                  type="button"
                  to="/gallary"
                  className="rounded-md w-full text-center bg-blue-500 px-3 py-2 mt-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black block"
                >
                  View
                </Link>
              </div>
            </div>

            {/* Edit Profile Link */}
            <div className="mt-4">
              <Link
                to="#"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
