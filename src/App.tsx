import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Heart, List } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const songs = [
    {
      title: "Dreamy Nights",
      artist: "Luna Wave",
      duration: "3:45",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      title: "Sunset Drive",
      artist: "The Wanderers",
      duration: "4:20",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      title: "Mountain High",
      artist: "Echo Valley",
      duration: "3:55",
      cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=200&h=200"
    },
  ];

  return (
    <div className="min-h-screen bg-[#d0dfed]">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-screen bg-[#88aed2] p-6">
        <h1 className="text-white text-2xl font-bold mb-8">Music Player</h1>
        <nav className="space-y-4">
          <a href="#" className="text-white flex items-center space-x-2 hover:opacity-80">
            <List size={20} />
            <span>Library</span>
          </a>
          <a href="#" className="text-white flex items-center space-x-2 hover:opacity-80">
            <Heart size={20} />
            <span>Liked Songs</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="grid grid-cols-3 gap-6">
          {songs.map((song, index) => (
            <div key={index} className="bg-[#ded8b8] rounded-lg p-4 hover:bg-[#c9c18d] transition-colors cursor-pointer">
              <img src={song.cover} alt={song.title} className="w-full aspect-square object-cover rounded-md mb-4" />
              <h3 className="font-semibold text-gray-800">{song.title}</h3>
              <p className="text-gray-600 text-sm">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Player Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#e4c1bd] p-4">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={songs[0].cover} alt={songs[0].title} className="w-14 h-14 rounded" />
            <div>
              <h3 className="font-medium text-gray-800">{songs[0].title}</h3>
              <p className="text-sm text-gray-600">{songs[0].artist}</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-4">
              <button className="text-gray-800 hover:text-gray-600">
                <Shuffle size={20} />
              </button>
              <button className="text-gray-800 hover:text-gray-600">
                <SkipBack size={24} />
              </button>
              <button 
                className="bg-[#88aed2] p-2 rounded-full text-white hover:bg-opacity-80"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button className="text-gray-800 hover:text-gray-600">
                <SkipForward size={24} />
              </button>
              <button className="text-gray-800 hover:text-gray-600">
                <Repeat size={20} />
              </button>
            </div>
            <div className="w-96 flex items-center space-x-2">
              <span className="text-xs text-gray-600">0:00</span>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={currentTime}
                onChange={(e) => setCurrentTime(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs text-gray-600">{songs[0].duration}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Volume2 size={20} className="text-gray-800" />
            <input 
              type="range" 
              min="0" 
              max="100" 
              defaultValue="50"
              className="w-24 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;