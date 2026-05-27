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
                    <div key={movie.id} className="border p-4 rounded">
                        <h2 className="text-xl font-semibold">{movie.title}</h2>
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Watched: {movie.watched ? "Yes" : "No"}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesPage
