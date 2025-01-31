import { useState, useEffect } from 'react';

const BadgeSystem = ({ eventsParticipated = 0 }) => {
  const [badge, setBadge] = useState('');

  const getBadge = () => {
    if (eventsParticipated >= 15) return "🏅 Gold Achiever";
    if (eventsParticipated >= 10) return "🥈 Silver Achiever";
    if (eventsParticipated >= 5) return "🥉 Bronze Achiever";
    return "🔰 Beginner";
  };

  useEffect(() => {
    setBadge(getBadge());
  }, [eventsParticipated]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-2xl shadow-xl text-center transition-all duration-300 mr-[10px]">
        <h3 className="text-2xl font-semibold text-white mb-6">Your Badge</h3>
        <p className="text-4xl font-extrabold text-white mt-2 mb-6 transition-all duration-500 transform hover:scale-110">
          {badge}
        </p>

        {/* Badge Description */}
        <div className="mt-6 bg-white p-8 rounded-xl shadow-lg text-gray-700">
          <h4 className="text-xl font-semibold mb-4 text-gray-800">How Badges Are Earned?</h4>
          <ul className="text-sm text-left space-y-4">
            <li className="flex items-center text-gray-700 hover:text-indigo-500">
              <span className="mr-3 text-2xl">🏅</span> <b className="text-gray-800">Gold Achiever</b>: Participate in 15+ events
            </li>
            <li className="flex items-center text-gray-700 hover:text-indigo-500">
              <span className="mr-3 text-2xl">🥈</span> <b className="text-gray-800">Silver Achiever</b>: Participate in 10-14 events
            </li>
            <li className="flex items-center text-gray-700 hover:text-indigo-500">
              <span className="mr-3 text-2xl">🥉</span> <b className="text-gray-800">Bronze Achiever</b>: Participate in 5-9 events
            </li>
            <li className="flex items-center text-gray-700 hover:text-indigo-500">
              <span className="mr-3 text-2xl">🔰</span> <b className="text-gray-800">Beginner</b>: Participate in 0-4 events
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BadgeSystem;
