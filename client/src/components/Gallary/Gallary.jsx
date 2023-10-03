import React, { useState, useEffect } from "react";

function Gallary() {
  const [User, setUser] = useState({});


  const callUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/api-patient/userdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUser(data);
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callUser();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-700">Medical Records Gallery</h1>
        <div className="space-y-4 max-w-screen-md mx-auto">
          {User.pastMedicalRecords && User.pastMedicalRecords.length > 0 ? (
            User.pastMedicalRecords.map((record, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden"
              >
                <img
                  src={record.recordUrl}
                  alt={`Medical Record ${index}`}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold mb-2">Description:</p>
                  <p>{record.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No medical records available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Gallary;
