import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-6 py-12 text-gray-900">
      {/* Header Section */}
      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-xl leading-relaxed">
          We are a team dedicated to ensuring that college events run smoothly, efficiently, 
          and better than ever before. Our platform helps manage events, streamline operations, 
          and enhance the overall experience for both organizers and participants.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl bg-blue-100 p-8 shadow-lg rounded-lg text-center">
        <h3 className="text-3xl font-semibold text-blue-600">
          Making College Events Better
        </h3>
        <p className="mt-4">
          Our platform helps students and organizers create, manage, and optimize 
          college events. From planning to execution, we ensure everything runs seamlessly.
        </p>
        <p className="mt-3">
          Say goodbye to mismanagement and confusion—our system brings clarity, structure, 
          and ease to every event, making your college experience more engaging and stress-free.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-4xl text-center mt-16">
        <h3 className="text-4xl font-bold text-blue-600 mb-6">Why Choose Us?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-600">Easy Event Creation</h4>
            <p className="mt-3">
              Create events with just a few clicks. Manage registrations, schedules, and updates easily.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-600">Smooth Collaboration</h4>
            <p className="mt-3">
              Foster teamwork and collaboration with real-time messaging, updates, and group coordination.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-600">Real-Time Updates</h4>
            <p className="mt-3">
              Get instant updates on event schedules, announcements, and any last-minute changes.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-4xl text-center mt-16">
        <h3 className="text-4xl font-bold text-blue-600 mb-6">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-600">1. Plan</h4>
            <p className="mt-3">Define event details, schedules, and invite participants.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-600">2. Organize</h4>
            <p className="mt-3">Manage registrations, communicate with attendees, and set up logistics.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-600">3. Execute</h4>
            <p className="mt-3">Run the event smoothly with real-time updates and collaboration tools.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-700 text-white py-10 mt-16 w-full">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-lg">&copy; 2025 College Event Management. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="hover:text-blue-200 transition text-lg">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;