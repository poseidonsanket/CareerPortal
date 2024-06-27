"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_lrteb3c",
          "template_da19ncc",
          form.current,
          "-4qBl5d4gcqRcLrE8"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      toast.success("Thanks for Reaching Out!");

      form.current.reset();
    }
  };
  return (
    <div className="bg-inherit py-10 rounded-lg md:mx-auto mx-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
        <p className="text-gray-400">
          Have any questions or want to get in touch? Fill out the form below.
        </p>
      </div>
      <form className="w-full max-w-lg mx-auto" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              id="user_name"
              name="from_name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
              id="user_email"
              name="from_email"
              type="email"
              placeholder="youremail@example.com"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600 h-48 resize-none"
              id="message"
              name="message"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
