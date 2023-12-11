'use client';
import { Button, Image, Modal, Spin, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ArrowRightOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

const Series = () => {
    const [series, setSeries] = useState<any[]>([]);
    const [isSeriePlotOpen, setIsSeriePlotOpen] = useState(false);
    const [selectedSerie, setSelectedSerie] = useState<any>(null);


    const fetchSeries = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/series/get');
            setSeries(res.data.series);
        } catch (error) {
            console.error('Error loading titles: ', error);
        }
    };

    useEffect(() => {
        fetchSeries();
    }, []);

    return (
        <div className='md:h-screen p-10'>


            {series ? (
                <div className='grid grid-cols-card gap-10'>
                    {series.map((serie) => (
                        <div className='flex flex-col justify-center items-center border-b border-1'>
                            <div>
                                <Image
                                    className="object-cover "
                                    width={250}
                                    height={400}
                                    src={serie.image}
                                    alt=""
                                />
                            </div>
                            <div className='flex flex-col text-center justify-center items-center'>
                                <span className='font-bold'> {serie.name}</span>
                                <span>{(serie.year).slice(0, 4)}</span>
                                <span className='flex items-center justify-center gap-1' > <FontAwesomeIcon className='text-3xl' icon={faImdb} /> {serie.imdb}</span>
                                <div className='my-2'>
                                    {serie.genre.map((genre: string) => (
                                        <Tag bordered={false} color="default"> <span>{genre}</span></Tag>
                                    ))}
                                </div>
                                <Button type="dashed"
                                    onClick={() => {
                                        setIsSeriePlotOpen(true);
                                        setSelectedSerie(serie);
                                    }}> Look Plot
                                </Button>
                            </div>
                            <div className='mt-2'>
                                <Link href={`/series/${serie._id}`}>
                                    <button> <ArrowRightOutlined /></button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className='flex flex-col justify-center h-full'>  <Spin size="large" /></h1>
            )}

            <Modal title={selectedSerie ? selectedSerie.name : "Serie Name"} footer={false} open={isSeriePlotOpen} onCancel={() => setIsSeriePlotOpen(false)} >
                {selectedSerie && (
                    <>
                        <span>{selectedSerie.plot}</span>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default Series;
