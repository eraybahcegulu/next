'use client';
import { Spin } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Serie {
    name: string;
}

export default function Serie({ params }: { params: { id: string } }) {
    const [serie, setSerie] = useState<Serie | null>(null);

    const fetchSerie = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/series/get/${params.id}`);
            setSerie(res.data.serie);
        } catch (error) {
            console.error("Error loading series: ", error);
        }
    };

    useEffect(() => {
        fetchSerie();
    }, []);

    return (
        <>
            <h1> Serie ID: {params.id}</h1>
            {serie ? (
                <h1> Serie Name: {serie.name}</h1>
            ) : (
                <h1> Serie Name: <Spin /></h1>
            )}
        </>
    );
}