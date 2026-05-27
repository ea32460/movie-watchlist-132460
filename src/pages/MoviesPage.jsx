import {useState} from "react";
import moviesData from '../utils/movies'

function MoviesPage() {
    const [movies, setMovies] = useState(moviesData)

    const [form, setForm] = useState({
        title: "",
        director: "",
        genre: "",
        watched: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.title.trim() === "" || form.director.trim() === "") {
            alert("Title dhe Director nuk mund te jen bosh")
            return }

        const newMovie = {
            id: Date.now(),
            ...form
        }
        setMovies([...movies, newMovie])

        setForm({
            title: "",
            director: "",
            genre: "",
            watched: false
        })
    }

    const handleDelete = (id)=>{
        setMovies(movies.filter((movie)=>movie.id !== id))
    }
    const toggleWatched = (id) => {
        setMovies(
            movies.map((movie) =>
                movie.id === id
                    ? { ...movie, watched: !movie.watched }
                    : movie
            )
        )
    }



    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Movies</h1>

            <form onSubmit={handleSubmit} className="mb-6 space-y-3">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />

                <input
                    type="text"
                    name="director"
                    placeholder="Director"
                    value={form.director}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                <input
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    value={form.genre}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="watched"
                        checked={form.watched}
                        onChange={handleChange}
                    />
                    Watched
                </label>
                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Add Movie
                </button>
            </form>

            <div className="grid gap-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="border p-4 rounded bg-white shadow-sm">

                        <h2 className="text-xl font-semibold">{movie.title}</h2>
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>
                            Watched:{" "}
                            <span className={movie.watched ? "text-green-600" : "text-red-600"}>
                {movie.watched ? "Yes" : "No"}
              </span>
                        </p>

                        <div className="flex gap-3 mt-3">
                            <button
                                onClick={() => toggleWatched(movie.id)}
                                className="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                                Toggle Watched
                            </button>

                            <button
                                onClick={() => handleDelete(movie.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesPage





