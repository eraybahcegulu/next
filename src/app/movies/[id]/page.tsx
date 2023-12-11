'use client';
import { HomeOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Spin, Image, Breadcrumb, Button, message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
interface Movie {
    name: string;
    image: string;
    imdb: number;
    genre: [];
    plot: string;
    time: string;
    year: string;
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

    const deleteMovie = async (id: any) => {
        await axios.delete(
            `http://localhost:3000/api/movies/delete/${id}`
        );
        message.success({
            content: (
                <span>
                    Movie <strong>{movie && movie.name}</strong> deleted
                </span>
            ),
            duration: 3,
            style: { marginRight: "80%" },
        });
        fetchMovie();
    };

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <div className='h-screen flex flex-col items-center text-center gap-1'>
            <div className='flex flex-row justify-start mt-2'>
                <Breadcrumb
                    items={[
                        {
                            href: '/',
                            title: <span><HomeOutlined /> Home</span>,
                        },
                        {
                            href: '/movies',
                            title: (
                                <>

                                    <span> <VideoCameraOutlined /> Movies</span>
                                </>
                            ),
                        },
                        {
                            title: <span>{movie && movie.name}</span>,
                        },
                    ]}
                />
            </div>
            {movie ? (
                <div className='flex flex-col justify-center items-center p-4 w-3/5 gap-1'>

                    <h1> ID: {params.id}</h1>
                    <div className='flex flex-row gap-2'>
                        <Button type="dashed">Edit</Button>
                        <Button type="primary" danger
                            onClick={() => deleteMovie(params.id)}
                        >Delete</Button>
                    </div>
                    <div>
                        <Image
                            className="object-cover "
                            src={movie.image}
                            alt=""
                        />
                    </div>
                    <div>
                        <h1> Name: {movie.name}</h1>
                        <h1> IMDB: {movie.imdb}</h1>
                        <h1> Genres: {movie.genre.map((genre: string) => (
                            <span> {genre}</span>
                        ))}
                        </h1>
                        <h1> Time: {movie.time}</h1>
                        <h1> Year: {(movie.year).slice(0, 4)}</h1>
                    </div>

                    <div className='border border-1 p-1'>
                        <h1> Plot: {movie.plot}</h1>
                    </div>

                </div>

            ) : (
                <h1> <Spin /></h1>

            )}
        </div>
    );
}