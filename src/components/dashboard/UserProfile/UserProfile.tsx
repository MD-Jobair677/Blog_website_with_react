import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {DashboardLayout} from  '@/components/dashboard/DashboardLayout'
const UserPage = () => {
  const [user, setUser] = useState({
    name: "Md Jobair Hossin",
    email: "jobair@example.com",
    bio: "Full Stack Developer | Laravel & React Enthusiast",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    setUser({
      ...user,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      bio: formData.get("bio") as string,
    });
    setIsModalOpen(false);
  };



   const userData = JSON.parse(localStorage.getItem('userData'));
  return (

        <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        
        {/* Left: Profile Info */}
        <div className="col-span-1 flex flex-col items-center text-center border-r border-gray-200">
          <img
            src={user.avatarUrl}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
          />
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p className="text-gray-600 text-sm">{userData.email}</p>
          <p className="text-gray-500 text-sm mt-2">{user.bio}</p>
        </div>

        {/* Right: Details and Edit */}
        <div className="col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">User Details</h3>
            <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white hover:bg-blue-700">
              Edit
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <p className="text-md font-medium">{userData.name}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <p className="text-md font-medium">{userData.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Bio</label>
              <p className="text-md font-medium">{user.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <Input name="name" defaultValue={userData.name} placeholder="Name" required />
              <Input name="email" type="email" defaultValue={userData.email} placeholder="Email" required />
              <Input name="bio" defaultValue={user.bio} placeholder="Bio" />
              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={() => setIsModalOpen(false)} type="button">
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </DashboardLayout>
  );
};

export default UserPage;
