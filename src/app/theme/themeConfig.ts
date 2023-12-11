import type { ThemeConfig } from 'antd';
import { Electrolize } from 'next/font/google';
const electrolize = Electrolize({ weight: '400', subsets: ['latin'] });

const theme: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: '#4096ff',
        fontFamily: electrolize + 'sans-serif',
    },

};

export default theme;