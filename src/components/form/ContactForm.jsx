import React, { useState } from "react";
import PrimaryButton from "../primarybutton/PrimaryButton";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.service ||
      !form.message
    ) {
      toast.error("All fields are required", {
        autoClose: 1000,
      });
      return;
    }

    toast.success("Message sent successfully!", {
      autoClose: 1000,
    });

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };
  return (
    <>
      <form action="#" className="w-full">
        <div className="w-full flex items-center gap-2">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="capitalize w-full py-[15px] pl-[12px] border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none  focus:ring-border-none focus:border-[#00637e] focus:border-t-border-[#00637e] focus:ring-border-[#199bff]/10"
              required
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div className="w-full md:w-1/2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full py-[15px] pl-[12px] border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none  focus:ring-border-none focus:border-[#00637e] focus:border-t-border-[#00637e] focus:ring-border-[#199bff]/10"
              required
              onChange={handleChange}
              value={form.email}
            />
          </div>
        </div>
        <div className="w-full flex items-center gap-2 my-5">
          <div className="w-full md:w-1/2">
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone"
              className="w-full py-[15px] pl-[12px] border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none  focus:ring-border-none focus:border-[#00637e] focus:border-t-border-[#00637e] focus:ring-border-[#199bff]/10"
              required
              onChange={handleChange}
              value={form.phone}
              maxLength={11}
              minLength={11}
              pattern="^(013|014|015|016|017|018|019)[0-9]{8}$"
            />
          </div>
          <div className="w-full md:w-1/2">
            <select
              name="service"
              className="w-full py-[15px] px-[5px] border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none  focus:ring-border-none focus:border-[#6CB93B] focus:border-t-border-[#6CB93B] focus:ring-border-[#199bff]/10"
              required
              onChange={handleChange}
              value={form.service}
            >
              <option value="" disabled>
                Select Your Service
              </option>
              <option value="webdesign">Web Design</option>
              <option value="webdevelopment">Web Development</option>
              <option value="fullstack">Full Stack Development</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full py-[15px] pl-[12px] border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none  focus:ring-border-none focus:border-[#00637e] focus:border-t-border-[#00637e] focus:ring-border-[#199bff]/10"
            rows="5"
            onChange={handleChange}
            value={form.message}
          />
        </div>
        <div className="mt-3">
          <PrimaryButton btnText="Send Message" handleClick={handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
