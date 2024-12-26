import React, { useEffect, useState } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  if (!user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="max-w-sm bg-white border rounded-lg shadow-lg p-6">
        <div className="flex">
          <img
            src={user.picture.large}
            alt="Profile"
            className="w-24 h-24 rounded-lg border border-gray-300"
          />
          <div className="ml-4">
            <h1 className="text-lg font-semibold">{`${user.name.first} ${user.name.last}`}</h1>
            <p className="text-sm text-gray-600 capitalize">{user.gender}</p>
            <p className="text-sm text-gray-600">{user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
