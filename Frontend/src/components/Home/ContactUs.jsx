import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 text-gray-900">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="text-gray-700">Have questions or want to collaborate? Reach out to us!</p>
      </header>

      {/* Contact Form */}
      <section className="w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-lg">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-900"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-900"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-900"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-yellow-200 hover:text-blue-900 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information */}
      <section className="w-full max-w-lg mt-8 text-center">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-lg font-semibold text-blue-600">Call Us</h3>
          <p className="text-gray-700">+91 98765 43210</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-lg font-semibold text-blue-600">Email Us</h3>
          <p className="text-gray-700">events@college.edu</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">Visit Us</h3>
          <p className="text-gray-700">College Campus, City, Country</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-gray-600">
        <p>&copy; 2025 College Event Management. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
