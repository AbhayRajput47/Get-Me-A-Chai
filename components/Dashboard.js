"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import bcrypt from "bcryptjs"; // Import bcrypt for hashing passwords

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: ""
  });

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      fetchuser(session.user.name).then((data) => {
        setForm(JSON.parse(data));
      });
    }
  }, [status, session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "username" ? value.split(/[^\w-]+/).join("").toLowerCase() : value,
    }));
  };

  
     
    const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const formCopy = { ...form };

    // Only hash if password is filled/changed
    if (form.password) {
      const salt = await bcrypt.genSalt(10);
      formCopy.password = await bcrypt.hash(form.password, salt);
    }

    const formData = Object.entries(formCopy);
    const result = await updateProfile(formData, session.user.name);

    toast.success("Profile Updated!", {
      position: "top-right",
      autoClose: 3000,
      transition: Bounce,
      theme: "dark",
    });
  } catch (error) {
    toast.error("Update failed!", {
      position: "top-right",
      autoClose: 3000,
      transition: Bounce,
      theme: "dark",
    });
    console.error("Error updating profile:", error);
  }
};

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen md:min-h-[84vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6">
        <div className="bg-gray-800 rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
          {/* Profile Section */}
          <div className="md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 p-8">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
              {form.profilepic ? (
                <img src={form.profilepic} alt="Profile" className="object-cover w-full h-full" />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-700 text-5xl text-gray-400">👤</div>
              )}
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">{form.name || "Your Name"}</h3>
            <p className="text-gray-300">{form.email || "your@email.com"}</p>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 p-6 bg-gray-900">
            <h2 className="text-3xl font-bold bg-gradient-to-br from-purple-400 to-blue-600 bg-clip-text text-transparent mb-6 text-center">Welcome to your Dashboard</h2>
            <form onSubmit={handleSubmit} className="space-y-1">
              {["name", "email", "username", "password", "profilepic", "coverpic", "razorpayid", "razorpaysecret"].map((field) => (
                <div key={field}>
                  <label className="block text-white font-semibold mb-1 capitalize">{field}</label>
                  <input
                    type={field === "password" ? "password" : "text"}
                    name={field}
                    id={field}
                    value={form[field] || ""}
                    onChange={handleChange}
                    required={["name", "email", "username", "password"].includes(field)}
                    className="w-full text-white bg-gray-800 px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                  />
                </div>
              ))}
              <button type="submit" className="w-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold py-2 rounded-lg mt-4 hover:bg-purple-700 transition">Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
