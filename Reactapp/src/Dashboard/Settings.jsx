// import React from 'react';
// import {Link} from 'react-router-dom'
// import './Dashboard_Styles/settings.css'
// import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
// import { Users, Star, Clock, Eye, ChevronRight, Search, Bell } from 'lucide-react';

// const data = [
//   { name: '2017', value: 5000 },
//   { name: '2018', value: 7000 },
//   { name: '2019', value: 4500 },
//   { name: '2020', value: 8000 },
//   { name: '2021', value: 6000 },
//   { name: '2022', value: 9000 },
//   { name: '2023', value: 7500 },
// ];

// const Settings = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-16 bg-white border-r flex flex-col items-center py-4 space-y-8">
//         <div className="text-indigo-600">
//           <svg className="w-8 h-8" viewBox="0 0 24 24">
//             <path fill="currentColor" d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
//           </svg>
//         </div>
//         <nav className="flex flex-col space-y-6">
//           <button className="p-2 text-gray-400 hover:text-indigo-600">
//             <Users size={20} />
//           </button>
//           <button className="p-2 text-gray-400 hover:text-indigo-600">
//             <Star size={20} />
//           </button>
//           <button className="p-2 text-gray-400 hover:text-indigo-600">
//             <Clock size={20} />
//           </button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {/* Header */}
//         <header className="flex justify-between items-center mb-8">
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 rounded-lg border bg-white w-64"
//               />
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="p-2 text-gray-400 hover:text-indigo-600">
//               <Bell size={20} />
//             </button>
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
//                 <span className="text-indigo-600 text-sm">GR</span>
//               </div>
//               <span className="text-sm font-medium">Ghulam R</span>
//             </div>
//           </div>
//         </header>

//         {/* Welcome Section */}
//         <div className="bg-white rounded-xl p-6 mb-6 flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-semibold text-gray-800">Hello John Doe</h1>
//             <p className="text-gray-500">Welcome back to your dashboard</p>
//           </div>
//           <img
//             src="/api/placeholder/200/150"
//             alt="Welcome illustration"
//             className="h-24"
//           />
//         </div>

//         {/* Chart Section */}
//         <div className="bg-white rounded-xl p-6 mb-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-lg font-semibold">Profile Growth</h2>
//             <div className="flex space-x-2">
//               <button className="px-4 py-1 rounded-full bg-indigo-600 text-white text-sm">Month</button>
//               <button className="px-4 py-1 rounded-full text-gray-500 text-sm">Weekly</button>
//             </div>
//           </div>
//           <LineChart width={800} height={300} data={data}>
//             <XAxis dataKey="name" stroke="#94a3b8" />
//             <YAxis stroke="#94a3b8" />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="value"
//               stroke="#4f46e5"
//               strokeWidth={2}
//               dot={{ fill: '#4f46e5', strokeWidth: 2 }}
//             />
//           </LineChart>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-4 gap-6">
//           <div className="bg-white p-6 rounded-xl">
//             <div className="flex items-center space-x-4">
//               <div className="p-2 bg-indigo-100 rounded-lg">
//                 <Users className="text-indigo-600" size={24} />
//               </div>
//               <div>
//                 <p className="text-2xl font-semibold">5,095</p>
//                 <p className="text-sm text-gray-500">Total Users</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-xl">
//             <div className="flex items-center space-x-4">
//               <div className="p-2 bg-blue-100 rounded-lg">
//                 <Eye className="text-blue-600" size={24} />
//               </div>
//               <div>
//                 <p className="text-2xl font-semibold">47,095</p>
//                 <p className="text-sm text-gray-500">Total Views</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-xl">
//             <div className="flex items-center space-x-4">
//               <div className="p-2 bg-yellow-100 rounded-lg">
//                 <Star className="text-yellow-600" size={24} />
//               </div>
//               <div>
//                 <p className="text-2xl font-semibold">25.81</p>
//                 <p className="text-sm text-gray-500">Total Sales</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-xl">
//             <div className="flex items-center space-x-4">
//               <div className="p-2 bg-red-100 rounded-lg">
//                 <Clock className="text-red-600" size={24} />
//               </div>
//               <div>
//                 <p className="text-2xl font-semibold">45.42</p>
//                 <p className="text-sm text-gray-500">Avg Time</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div className="w-64 bg-white border-l p-4">
//         <div className="space-y-4">
//           <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//             <span>500</span>
//             <ChevronRight size={20} className="text-gray-400" />
//           </div>
//           <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//             <span>3502</span>
//             <ChevronRight size={20} className="text-gray-400" />
//           </div>
//           <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//             <span>$523001</span>
//             <ChevronRight size={20} className="text-gray-400" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;