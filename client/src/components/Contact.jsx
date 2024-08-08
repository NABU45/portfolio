import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User created:", result);
        // Reset form data or display success message
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-auto">
      <div
        name="contact"
        className="bg-gradient-to-b from-slate-950 to-slate-600 w-full text-white h-full pl-10"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center ">
          <div className="pb-8 mt-16">
            <p className="text-4xl font-bold inline border-b-4 border-slate-600 hover:border-slate-700 cursor-pointer gradient-hover">
              Contact
            </p>
            <p className="py-6">Submit the form below to get in touch with me</p>
          </div>

          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />

              <textarea
                rows="10"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-4 py-2 my-8 mx-auto flex duration-300 rounded-lg"
              >
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
