'use client';
import { Spin } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Movie {
    name: string;
}

export default function Movie({ params }: { params: { id: string } }) {
    const [movie, setMovie] = useState<Movie | null>(null);

    const fetchMovie = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/movies/get/${params.id}`);
            setMovie(res.data.movie);
        } catch (error) {
            console.error("Error loading movies: ", error);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <>
            <h1> Movie ID: {params.id}</h1>
            {movie ? (
                <h1> Movie Name: {movie.name}</h1>
            ) : (
                <h1> Movie Name: <Spin /></h1>
            )}
        </>
    );
}