import { useState, useEffect } from "react";

const Leaderboard = () => {
  const [students, setStudents] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Mock leaderboard data
    const data = [
      { id: 1, name: "John Doe", eventsParticipated: 10, coins: 100 },
      { id: 2, name: "Jane Smith", eventsParticipated: 8, coins: 80 },
      { id: 3, name: "Alice Brown", eventsParticipated: 6, coins: 60 },
    ];
    setStudents(data);
    setCurrentUser(data[1]); // Assume current user is Jane Smith
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>

      {/* Current User Card */}
      {currentUser && (
        <div className="mb-6 bg-blue-100 border border-blue-400 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Your Score</h2>
          <p className="text-lg">Events Participated: {currentUser.eventsParticipated}</p>
          <p className="text-lg">Coins Earned: {currentUser.coins}</p>
        </div>
      )}

      {/* Leaderboard Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Rank</th>
              <th className="p-3 text-left">Student Name</th>
              <th className="p-3 text-left">Events Participated</th>
              <th className="p-3 text-left">Coins</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="border-b border-gray-300">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 font-medium">{student.name}</td>
                <td className="p-3">{student.eventsParticipated}</td>
                <td className="p-3">{student.coins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
