import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimesCircle } from 'react-icons/fa';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [student, setStudent] = useState({
    name: 'John Doe',
    matricNumber: 'GAP/2024/1234',
    email: 'johndoe@example.com',
    department: 'Computer Science',
    phone: '08012345678',
  });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-2xl mt-10 mx-auto p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Student Profile</h1>
      <div className="space-y-4">
        <div className="text-center mb-4">
          <img
            src="/profile-placeholder.png"
            alt="Profile Avatar"
            className="w-24 h-24 mx-auto rounded-full shadow-md border-4 border-blue-500"
          />
        </div>
        {['name', 'matricNumber', 'email', 'department', 'phone'].map((field) => (
          <div key={field} className="flex justify-between items-center">
            <label className="font-semibold capitalize text-gray-600">{field.replace(/([A-Z])/g, ' $1')}:</label>
            {isEditing ? (
              <input
                type="text"
                name={field}
                value={student[field]}
                onChange={handleChange}
                className="border p-1 rounded w-2/3"
              />
            ) : (
              <span className="text-gray-700">{student[field]}</span>
            )}
          </div>
        ))}

        <div className="flex justify-center gap-4 mt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700"
              >
                <FaSave /> Save
              </button>
              <button
                onClick={handleEditToggle}
                className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-700"
              >
                <FaTimesCircle /> Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
            >
              <FaEdit /> Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
