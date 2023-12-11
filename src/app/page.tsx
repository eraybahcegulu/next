'use client';

import { ConfigProvider, Form, Modal } from 'antd';
import theme from './theme/themeConfig'
import { useState } from 'react';
import axios from "axios";

import MoviesForm from './components/MoviesForm'
import SeriesForm from './components/SeriesForm'
import Link from 'next/link';

export default function Home() {
  const [isMoviesModalOpen, setIsMoviesModalOpen] = useState(false);
  const [isSeriesModalOpen, setIsSeriesModalOpen] = useState(false);
  const [movieForm] = Form.useForm();
  const [serieForm] = Form.useForm();

  const createMovie = async (values: any) => {

    await axios.post(
      "http://localhost:3000/api/movies/create",
      values
    );
    movieForm.resetFields();
  };

  const createSerie = async (values: any) => {

    await axios.post(
      "http://localhost:3000/api/series/create",
      values
    );
    serieForm.resetFields();
  };

  return (
    <ConfigProvider theme={theme}>
      <div className='h-screen bg-emerald-700 md:flex flex-row items-center justify-center gap-10'>
        <div className='flex flex-col gap-4 '>
          <div className='bg-slate-400 px-10 md:py-20 py-5 cursor-pointer hover:scale-105 transition-all text-center mx-5 my-2'
            onClick={() => setIsMoviesModalOpen(true)}>
            <span className='md:text-2xl font-bold text-xs'> CREATE MOVIE </span>

          </div>


          <Link href={'/movies'}>

            <div className='bg-slate-400 px-10 md:py-20 py-5 cursor-pointer hover:scale-105 transition-all text-center mx-5 my-2'
            >
              <span className='md:text-2xl font-bold text-xs'> GO MOVIES </span>

            </div>
          </Link>
        </div>



        <Modal title="CREATE MOVIE" footer={false} open={isMoviesModalOpen} onCancel={() => setIsMoviesModalOpen(false)} >

          <Form
            form={movieForm}
            onFinish={createMovie}
          >
            <MoviesForm />
          </Form>
        </Modal>

        <div className='flex flex-col gap-4 m-4 text-sm'>
          <div className='bg-cyan-600 px-10 md:py-20 py-5 cursor-pointer hover:scale-105 transition-all text-center mx-5 my-2'
            onClick={() => setIsSeriesModalOpen(true)}>
            <span className='md:text-2xl font-bold text-xs'> CREATE TV SERIE </span>

          </div>



          <Link href={'/series'}>

          <div className='bg-cyan-600 px-10 md:py-20 py-5 cursor-pointer hover:scale-105 transition-all text-center mx-5 my-2'
          >
            <span className='md:text-2xl font-bold text-xs'> GO TV SERIES </span>

          </div>
          </Link>




        </div>


        <Modal title="CREATE TV SERIE" footer={false} open={isSeriesModalOpen} onCancel={() => setIsSeriesModalOpen(false)}>
          <Form
            form={serieForm}
            onFinish={createSerie}
          >
            <SeriesForm />
          </Form>
        </Modal>
      </div>

    </ConfigProvider>
  )
}