import React from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            {/* change the profile Photo */}
            <User className="h-48 w-full object-cover md:w-48" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Patient Profile
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
              {`Zeel Vaghasiya`}
            </h2>
            <p className="mt-2 text-gray-500">
              <strong>Email:</strong> zeel@gmail.com
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Phone:</strong> 9090909090
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Date of Birth:</strong> 06/11/2003
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Gender:</strong> Male
            </p>
            <p className="mt-2 text-gray-500">
              <strong>Address:</strong>{" "}
              {`2 pragati park, surat, gujarat, 395004`}
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Medical Records:
              </h3>
              {/* <ul className="mt-2 text-gray-500">
                {patient.pastMedicalRecords.map((record, index) => (
                  <li key={index}>
                    <strong>Description:</strong> {record.description}
                  </li>
                ))}
              </ul> */}
            </div>

            {/* the Link to Modify Profile */}
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

// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Profile = ({ patient }) => {
//   return (
//     <div className="bg-gray-100 p-8">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//         <div className="md:flex">
//           <div className="md:flex-shrink-0">
//             <img
//               className="h-48 w-full object-cover md:w-48"
//               src="https://via.placeholder.com/150"
//               alt="Patient Profile"
//             />
//           </div>
//           <div className="p-8">
//             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
//               Patient Profile
//             </div>
//             <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
//               {`${patient.firstName} ${patient.lastName}`}
//             </h2>
//             <p className="mt-2 text-gray-500">
//               <strong>Email:</strong> {patient.email}
//             </p>
//             <p className="mt-2 text-gray-500">
//               <strong>Phone:</strong> {patient.phoneNumber}
//             </p>
//             <p className="mt-2 text-gray-500">
//               <strong>Date of Birth:</strong> {patient.dateOfBirth}
//             </p>
//             <p className="mt-2 text-gray-500">
//               <strong>Gender:</strong> {patient.gender}
//             </p>
//             <p className="mt-2 text-gray-500">
//               <strong>Address:</strong>{' '}
//               {`${patient.address.street}, ${patient.address.city}, ${patient.address.state}, ${patient.address.zipCode}`}
//             </p>
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold text-gray-800">Medical Records:</h3>
//               <ul className="mt-2 text-gray-500">
//                 {patient.pastMedicalRecords.map((record, index) => (
//                   <li key={index}>
//                     <strong>Description:</strong> {record.description}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Add the Link to Modify Profile */}
//             <Link to="/modify-profile" className="mt-4 inline-block text-blue-600 hover:underline">
//               Modify Profile
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
