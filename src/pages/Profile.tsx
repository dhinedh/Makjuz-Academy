import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";
import MyCourses from "../components/profile/MyCourses";
const ProfilePage: React.FC = () => {
  const { user, loading, refreshUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<any>(user || {});
  const [saving, setSaving] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-lg">
        No user found. Please log in.
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const updatedData = {
        name: formData.name,
        phone: formData.phone,
        location: formData.location,
        bio: formData.bio,
        qualification: formData.qualification,
        collegeName: formData.collegeName,
        dateOfBirth: formData.dateOfBirth,
      };
      await api.put(`/users/profile/${user._id}`, updatedData);
      await refreshUser();
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update profile:", err);
    } finally {
      setSaving(false);
    }
  };

  const renderField = (
    label: string,
    key: string,
    type: "text" | "textarea" | "date" = "text"
  ) => (
    <div className="flex flex-col">
      <label className="font-semibold text-gray-700 mb-1">{label}</label>
      {isEditing ? (
        type === "textarea" ? (
          <textarea
            name={key}
            value={formData[key] || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        ) : type === "date" ? (
          <input
            type="date"
            name={key}
            value={
              formData[key]
                ? new Date(formData[key]).toISOString().split("T")[0]
                : ""
            }
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        ) : (
          <input
            name={key}
            value={formData[key] || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        )
      ) : (
        <p className="text-gray-600">{user[key as keyof typeof user] || "-"}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Edit
          </button>
        ) : (
          <div className="flex space-x-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-5 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Profile Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderField("Name", "name")}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Email</label>
          <p className="text-gray-600">{user.email || "-"}</p>
        </div>
        {renderField("Phone", "phone")}
        {renderField("Qualification", "qualification")}
        {renderField("College Name", "collegeName")}
        {renderField("Date of Birth", "dateOfBirth", "date")}
        {renderField("Location", "location")}
        {renderField("Bio", "bio", "textarea")}
      </div>
      {/* My Courses Section */}
      <MyCourses userId={user._id} /> 
    </div>
  );
};

export default ProfilePage;