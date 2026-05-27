import {useState} from "react";
import moviesData from '../utils/movies'

function MoviesPage() {
    const [movies] = useState(moviesData)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>

        <div className="grid gap-4">
            {movies.map((movie)=> (
                <div
                key={movie.id}
                className="border p-4 rounded shadow-sm bg-white"
                >
                    <h2 className="text-xl font-semibold">{movie.title}</h2>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p>
                        <strong>Watched:</strong>{' '}
                        {movie.watched ? 'Yes' : 'No'}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MoviesPage
