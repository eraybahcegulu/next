'use client';
import { Button, Image, Modal, Spin, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

const Movies = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [isMoviePlotOpen, setIsMoviePlotOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<any>(null);


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
        <div className='md:h-screen p-10'>
            {movies ? (
                <div className='grid grid-cols-card gap-10'>
                    {movies.map((movie) => (
                        <div className='flex flex-col items-center border-b border-1'>
                            <div>
                                <Image
                                    className="object-cover "
                                    width={250}
                                    height={400}
                                    src={movie.image}
                                    alt=""
                                />
                            </div>
                            <div className='flex flex-col text-center justify-center items-center'>
                                <span className='font-bold'> {movie.name}</span>
                                <span>{(movie.year).slice(0, 4)}</span>
                                <span>{movie.time} Min.</span>
                                <span className='flex items-center justify-center gap-1' > <FontAwesomeIcon className='text-3xl' icon={faImdb} /> {movie.imdb}</span>
                                <div className='my-2'>
                                    {movie.genre.map((genre: string) => (
                                        <Tag bordered={false} color="default"> <span>{genre}</span></Tag>
                                    ))}
                                </div>
                                <Button type="dashed"
                                    onClick={() => {
                                        setIsMoviePlotOpen(true);
                                        setSelectedMovie(movie);
                                    }}> Look Plot
                                </Button>
                            </div>
                            <div className='mt-2'>
                                <Link href={`/movies/${movie._id}`}>
                                    <button> <ArrowRightOutlined /></button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className='flex flex-col justify-center h-full'>  <Spin size="large" /></h1>
            )}

            <Modal title={selectedMovie ? selectedMovie.name : "Movie Name"} footer={false} open={isMoviePlotOpen} onCancel={() => setIsMoviePlotOpen(false)} >
                {selectedMovie && (
                    <>
                        <span>{selectedMovie.plot}</span>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default Movies;
