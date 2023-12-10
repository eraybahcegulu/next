'use client';

import { ConfigProvider } from 'antd';
import theme from './theme/themeConfig'

export default function Home() {

  return (
    <ConfigProvider theme={theme}>
      <div>
        FIRST
      </div>

    </ConfigProvider>
  )
}