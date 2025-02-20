// 
// import React from 'react';
// import './Dashboard_Styles/message.css'
// import { FileText, MoreVertical, Settings } from 'lucide-react';

// const Message = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-blue-600 p-8 rounded-lg relative overflow-hidden">
//         <div className="max-w-2xl relative z-10">
//           <h1 className="text-4xl font-bold text-white mb-4">
//             Explore Redesigned Able Pro
//           </h1>
//           <p className="text-blue-100 mb-8 text-lg">
//             The Brand new User Interface with power of Bootstrap Components. Explore the Endless possibilities with Able Pro.
//           </p>
//           <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
//             Exclusive on Themeforest
//           </button>
//         </div>
        
//         {/* Rocket illustration */}
//         <div className="absolute right-16 top-1/2 -translate-y-1/2">
//           <img 
//             src="/api/placeholder/200/200" 
//             alt="Rocket illustration" 
//             className="w-32 h-32"
//           />
//         </div>

//         {/* Settings button */}
//         <button className="absolute top-4 right-4 text-white/80 hover:text-white">
//           <Settings size={24} />
//         </button>

//         {/* Background gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-50"></div>
//       </div>

//       {/* Cards Section */}
//       <div className="p-8 grid grid-cols-2 gap-6">
//         {/* Earnings Card */}
//         <div className="bg-white rounded-lg p-6 shadow-sm">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <FileText className="text-blue-600" size={24} />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">All Earnings</h2>
//             </div>
//             <button className="text-gray-400 hover:text-gray-600">
//               <MoreVertical size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Page Views Card */}
//         <div className="bg-white rounded-lg p-6 shadow-sm">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
//                 <FileText className="text-orange-600" size={24} />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">Page Views</h2>
//             </div>
//             <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;