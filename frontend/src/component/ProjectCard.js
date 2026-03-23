import React, { useState, useRef } from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Arrow from '../assets/arow1.png'


//basic white card
export const Card1 = ({ project = {} }) => {
  const [likes, setLikes] = useState({ card1: project.likes || 0 });
  const [liked, setLiked] = useState({ card1: false, });
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.video) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleLike = (cardId) => {
    setLiked(prev => ({ ...prev, [cardId]: !prev[cardId] }));
    setLikes(prev => ({
      ...prev,
      [cardId]: prev[cardId] + (liked[cardId] ? -1 : 1)
    }));
  };
  const getTimeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);

    const diffInSeconds = Math.floor((now - past) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(diffInSeconds / 3600);
    const days = Math.floor(diffInSeconds / 86400);
    const weeks = Math.floor(diffInSeconds / (86400 * 7));
    const years = Math.floor(diffInSeconds / (86400 * 365));

    if (years > 0) return `${years}y`;
    if (weeks > 0) return `${weeks}w`;
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;

    return "Just now";
  };
  return (

    <div
      className="group w-full h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative bg-white aspect-[4/3] flex items-center justify-center overflow-hidden">

        {/* Thumbnail Image - visible by default, fades out on hover */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 z-0 ${isHovered && project.video ? 'opacity-0' : 'opacity-100'}`}>
          <img alt='' src={project.thumbnail} className="w-full h-full object-cover" />
        </div>

        {/* Hover Video - plays on enter, pauses+resets on leave */}
        {project.video && (
          <video
            ref={videoRef}
            src={"https://www.w3schools.com/html/mov_bbb.mp4"}
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
      </div>



      <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
        <div className="flex flex-col items-start gap-3 text-left">

          <div className="flex items-start gap-3">

            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
              <img
                src={project.iconImage}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <div className="font-semibold text-sm sm:text-base text-zinc-400">
                {project.title}
              </div>
            </div>

          </div>

          <div className="font-semibold text-xs sm:text-sm text-zinc-600 text-left">
            {project.description}
          </div>

        </div>


        <a href={project.url} className="block text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors truncate">
          {project.url}
        </a>

        <div className="flex items-center gap-4 sm:gap-6 pt-2">
          <button
            onClick={() => handleLike('card1')}
            className="flex items-center gap-2 hover:scale-110 transition-transform"
          >
            <Heart
              size={18}
              className={liked.card1 ? 'fill-blue-500 text-blue-500' : 'text-gray-400'}
            />
            <span className={`text-sm ${liked.card1 ? 'text-blue-500' : 'text-gray-400'}`}>{likes.card1}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <MessageCircle size={18} />
            <span className="text-sm">{project.commentsCount || 0}</span>
          </button>
          <div className="text-xs sm:text-sm text-gray-400">  {getTimeAgo(project.createdAt)}</div>

        </div>
      </div>
    </div>

  )
}

// //basic black card
// export const Card2 = () => {
//   const [likes, setLikes] = useState({ card1: 223, card2: 156, card3: 342 });
//   const [liked, setLiked] = useState({ card1: false, card2: false, card3: false });

//   const handleLike = (cardId) => {
//     setLiked(prev => ({ ...prev, [cardId]: !prev[cardId] }));
//     setLikes(prev => ({
//       ...prev,
//       [cardId]: prev[cardId] + (liked[cardId] ? -1 : 1)
//     }));
//   };
//   return (

//     <div className="group h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/10">
//       <div className="relative bg-black p-4 sm:p-6 md:p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
//         {/* 3D Shape with dramatic lighting */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent blur-3xl"></div>

//           {/* Main Geometric Shape */}
//           <div className="relative" style={{ perspective: '1000px' }}>
//             <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(15deg)' }}>
//               {/* Front face */}
//               <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 transform translate-z-16" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
//                 {/* Letter R */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-8xl font-black text-white/90 tracking-tighter" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
//                     R
//                   </div>
//                 </div>
//               </div>

//               {/* Edge highlight */}
//               <div className="absolute top-0 left-1/2 w-1 h-32 bg-gradient-to-b from-white/80 to-transparent transform -translate-x-1/2 blur-sm"></div>
//             </div>
//           </div>

//           {/* Dramatic light beam */}
//           <div className="absolute -right-32 top-1/2 w-96 h-2 bg-gradient-to-r from-white via-white/50 to-transparent blur-xl transform -translate-y-1/2 rotate-[-15deg]"></div>
//         </div>

//         {/* Subtle grid background */}
//         <div className="absolute inset-0 opacity-5" style={{
//           backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
//             R
//           </div>
//           <div>
//             <div className="font-semibold">studio_render</div>
//             <div className="text-sm text-gray-400">1d</div>
//           </div>
//         </div>

//         <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
//           3d-geometric.design
//         </a>

//         <div className="flex items-center gap-6 pt-2">
//           <button
//             onClick={() => handleLike('card3')}
//             className="flex items-center gap-2 hover:scale-110 transition-transform"
//           >
//             <Heart
//               size={20}
//               className={liked.card3 ? 'fill-white text-white' : 'text-gray-400'}
//             />
//             <span className={liked.card3 ? 'text-white' : 'text-gray-400'}>{likes.card3}</span>
//           </button>
//           <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
//             <MessageCircle size={20} />
//             <span>124</span>
//           </button>
//         </div>
//       </div>
//     </div>

//   )
// }
export const Card3 = () => {
  const [likes, setLikes] = useState({ card1: 223, card2: 156, card3: 342 });
  const [liked, setLiked] = useState({ card1: false, card2: false, card3: false });

  const handleLike = (cardId) => {
    setLiked(prev => ({ ...prev, [cardId]: !prev[cardId] }));
    setLikes(prev => ({
      ...prev,
      [cardId]: prev[cardId] + (liked[cardId] ? -1 : 1)
    }));
  };
  return (

    <div className="group bg-gradient-to-br h-fit from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-red-500/10">
      <div className="relative bg-gradient-to-b from-gray-800 to-black p-4 sm:p-6 md:p-8 aspect-[4/3]">
        {/* Top Icons */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 justify-center">
          {['MUSIC', 'TECH', 'TYSON', 'MISC'].map((label, i) => (
            <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-lg">
              {label}
            </div>
          ))}
        </div>

        {/* Red Monster Card */}
        <div className="bg-red-600 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <div className="relative">
            {/* Monster Face */}
            <div className="text-center mb-4 sm:mb-6">
              <div className="inline-block bg-gradient-to-b from-red-800 to-red-900 rounded-t-full px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8">
                <div className="flex gap-4 mb-2">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div className="w-24 h-12 bg-white rounded-lg mx-auto"></div>
              </div>
              <div className="w-32 h-24 bg-white rounded-b-full mx-auto -mt-2"></div>
              {/* Arms */}
              <div className="flex justify-between -mt-12">
                <div className="w-12 h-24 bg-gradient-to-br from-red-800 to-black rounded-full transform -rotate-12"></div>
                <div className="w-12 h-24 bg-gradient-to-br from-red-800 to-black rounded-full transform rotate-12"></div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-white text-xs">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-2"></div>
                <div className="font-bold">ORIGIN</div>
              </div>
              <div className="text-center">
                <div className="font-bold mb-1">MUZZY</div>
                <div className="text-white/70">CHARACTER</div>
              </div>
              <div className="text-center">
                <div className="font-bold mb-1">HALF HUMAN</div>
                <div className="text-white/70">APPEARANCE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-6 text-center">
          <div className="text-3xl font-light text-white mb-1">Let's make</div>
          <div className="text-3xl font-light italic text-emerald-400">it more</div>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full"></div>
          <div>
            <div className="font-semibold">redmonster_</div>
            <div className="text-sm text-gray-400">5h</div>
          </div>
        </div>

        <div className="flex items-center gap-6 pt-2">
          <button
            onClick={() => handleLike('card2')}
            className="flex items-center gap-2 hover:scale-110 transition-transform"
          >
            <Heart
              size={20}
              className={liked.card2 ? 'fill-red-500 text-red-500' : 'text-gray-400'}
            />
            <span className={liked.card2 ? 'text-red-500' : 'text-gray-400'}>{likes.card2}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <MessageCircle size={20} />
            <span>89</span>
          </button>
        </div>
      </div>
    </div>

  )
}

export const CardSkeleton = () => {
  return (
    <div className="relative overflow-hidden w-full h-fit bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-zinc-800 ">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.5s_infinite]" />
      {/* Image Skeleton */}
      <div className="bg-zinc-800 aspect-[4/3] w-full" />

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 space-y-4">

        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-zinc-800 rounded-full" />

          <div className="flex-1 space-y-2">
            <div className="h-3 bg-zinc-800 rounded w-32"></div>
            <div className="h-2 bg-zinc-800 rounded w-20"></div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-2 bg-zinc-800 rounded w-full"></div>
          <div className="h-2 bg-zinc-800 rounded w-5/6"></div>
        </div>

        {/* URL */}
        <div className="h-2 bg-zinc-800 rounded w-40"></div>

        {/* Footer */}
        <div className="flex gap-4 pt-2">
          <div className="h-4 w-10 bg-zinc-800 rounded"></div>
          <div className="h-4 w-10 bg-zinc-800 rounded"></div>
          <div className="h-4 w-12 bg-zinc-800 rounded"></div>
        </div>

      </div>

    </div>
  );
};