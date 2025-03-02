import React from 'react';
import { 
  BookOpen, Award, Clock, TrendingUp, 
  Zap, Star, ChevronRight, Play, CheckCircle 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  // Sample data
  const progressData = [
    { subject: 'Math', progress: 65, color: 'from-blue-500 to-cyan-400' },
    { subject: 'Science', progress: 42, color: 'from-green-500 to-emerald-400' },
    { subject: 'Reading', progress: 78, color: 'from-purple-500 to-indigo-400' },
    { subject: 'Art', progress: 90, color: 'from-pink-500 to-rose-400' },
  ];

  const recentActivities = [
    { id: 1, title: 'Completed "Addition Quiz"', time: '10 minutes ago', icon: CheckCircle, color: 'bg-green-100 text-green-600' },
    { id: 2, title: 'Watched "Solar System" video', time: '1 hour ago', icon: Play, color: 'bg-blue-100 text-blue-600' },
    { id: 3, title: 'Earned "Science Explorer" badge', time: '2 hours ago', icon: Award, color: 'bg-purple-100 text-purple-600' },
  ];

  const recommendedLessons = [
    { 
      id: 1, 
      title: 'Fractions Made Easy', 
      category: 'Math', 
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '15 min'
    },
    { 
      id: 2, 
      title: 'Animal Habitats', 
      category: 'Science', 
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '20 min'
    },
    { 
      id: 3, 
      title: 'Story Time: Adventures', 
      category: 'Reading', 
      level: 'All Levels',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '10 min'
    },
  ];

  const achievements = [
    { id: 1, name: 'Math Wizard', description: 'Complete 10 math quizzes', progress: 7, total: 10 },
    { id: 2, name: 'Bookworm', description: 'Read 5 stories', progress: 5, total: 5, completed: true },
    { id: 3, name: 'Science Explorer', description: 'Finish all science experiments', progress: 3, total: 8 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, Alex! 👋</h1>
            <p className="mt-2 opacity-90">Ready to continue your learning adventure?</p>
            <div className="mt-4 flex items-center">
              <div className="bg-white/20 rounded-lg px-3 py-1 flex items-center">
                <TrendingUp size={16} className="mr-2" />
                <span className="text-sm font-medium">7 day streak!</span>
              </div>
              <div className="ml-4 bg-white/20 rounded-lg px-3 py-1 flex items-center">
                <Star size={16} className="mr-2" />
                <span className="text-sm font-medium">250 points</span>
              </div>
            </div>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-purple-600 hover:bg-purple-50 font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center">
            Continue Learning
            <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Section */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Your Progress</h2>
              <button className="text-sm text-purple-600 hover:text-purple-800 font-medium flex items-center">
                View All
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {progressData.map((subject, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{subject.subject}</span>
                    <span className="text-sm font-bold">{subject.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${subject.color}`}
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Lessons */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Recommended for You</h2>
              <button className="text-sm text-purple-600 hover:text-purple-800 font-medium flex items-center">
                View All
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommendedLessons.map((lesson) => (
                <div key={lesson.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200 group">
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={lesson.image} 
                      alt={lesson.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                      {lesson.duration}
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-purple-600">{lesson.category}</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{lesson.level}</span>
                    </div>
                    <h3 className="font-medium text-gray-800 mb-2">{lesson.title}</h3>
                    <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-medium py-1.5 rounded-lg transition-colors duration-200 flex items-center justify-center">
                      Start Lesson
                      <Play size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Daily Streak */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Daily Streak</h2>
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-8 border-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">7</div>
                  <div className="text-sm text-gray-600">days</div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i < 7 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                    {i === 6 ? <Zap size={14} /> : <CheckCircle size={14} />}
                  </div>
                  <span className="text-xs mt-1 text-gray-500">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivities.map((activity) => {
                const ActivityIcon = activity.icon;
                return (
                  <div key={activity.id} className="flex items-start">
                    <div className={`p-2 rounded-lg ${activity.color} mr-3`}>
                      <ActivityIcon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="w-full mt-4 text-sm text-purple-600 hover:text-purple-800 font-medium">
              View All Activity
            </button>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <div className={`p-2 rounded-full ${achievement.completed ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'} mr-3`}>
                      <Award size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{achievement.name}</h3>
                      <p className="text-xs text-gray-500">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${achievement.completed ? 'bg-yellow-500' : 'bg-blue-500'}`}
                      style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-xs text-right text-gray-500">
                    {achievement.progress}/{achievement.total} completed
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;