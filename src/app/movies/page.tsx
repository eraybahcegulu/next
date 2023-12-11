'use client';
import { Card, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Movies = () => {
    const [movies, setMovies] = useState<any[]>([]);

    const fetchMovies = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/movies/get');
            setMovies(res.data.movies);
        } catch (error) {
            console.error('Error loading titles: ', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center gap-2 p-2'>
            {movies.map((movie) => (
                <Card
                    key={movie._id}

                    style={{ backgroundColor: 'gray' }}
                >
                    <span> {movie.name}</span>
                    <div>
                        <Image
                            width={200}
                            src={movie.image}
                        />
                    </div>

                    <Link href={`/movies/${movie._id}`}>
                        <button> go</button>
                    </Link>
                </Card>
            ))}
        </div>
    );
};

export default Movies;
