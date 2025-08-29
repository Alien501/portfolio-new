"use client"

import Background from '@/components/background/Background';
import './style.css';
import Main from '@/sections/Main';
import Loader from '@/sections/Loader';
import { useState } from 'react';

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="container h-screen overflow-hidden relative z-10 select-none">
      <Background />
      {showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
        <Main />
      )}
    </div>
  );
}