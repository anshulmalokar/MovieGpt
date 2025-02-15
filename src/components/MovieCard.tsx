import React from 'react';

type MovieProps = {
  title: string;
  poster_path: string;
  vote_average: number;
};

const MovieCard: React.FC<MovieProps> = ({ title, poster_path, vote_average }) => {
  return (
    <div className="relative m-2 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 flex-shrink-0">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-55 h-fit object-cover rounded-lg"
      />
      
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full text-white p-2">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        <div className="flex items-center space-x-1">
          <span className="text-xs font-bold">{vote_average.toFixed(1)}</span>
          <span className="text-xs text-yellow-400">★</span>
        </div>
      </div>
    </div>

  );
};

export default MovieCard;
