'use client';

import { useRef, useState, useEffect } from 'react';
import CardPreview from '@/components/CardPreview';
import InputForm from '@/components/InputForm';
import DownloadButton from '@/components/DownloadButton';
import { generateCardId, getCardDates } from '@/utils/generateCardId';

export default function HomePage() {
  const cardRef = useRef(null);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  // Generate on the client only to avoid SSR/client hydration mismatch
  const [cardId, setCardId] = useState('DEV-2026-000000');
  const [dates, setDates] = useState({ issueDate: '--/--/----', expiryDate: '--/--/----' });

  const [scale, setScale] = useState(1);

  useEffect(() => {
    setCardId(generateCardId());
    setDates(getCardDates());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = Math.min(window.innerWidth - 48, 800);
      setScale(containerWidth / 800);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isReady = name.trim().length > 0 && !!image;

  return (
    <main 
      className="min-h-screen flex flex-col items-center py-12 px-4 relative overflow-x-hidden bg-[#f8fafc]"
      style={{ backgroundColor: '#f8fafc' }}
    >

      {/* ── Background Patterns ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Subtle radial glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(ellipse at center, rgba(203,213,225,0.5) 0%, transparent 70%)' }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(rgba(148,163,184,1) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      </div>

      {/* ── Header ── */}
      <header className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-amber-600 text-xs font-semibold tracking-widest uppercase">Digital Bangladesh</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-slate-900">Developer </span>
          <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Card</span>
          <span className="text-slate-900"> Generator</span>
        </h1>
        <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto leading-relaxed font-medium">
          আপনার নাম ও ছবি দিয়ে একটি প্রিমিয়াম ডেভেলপার কার্ড তৈরি করুন এবং ডাউনলোড করুন।
        </p>
      </header>

      {/* ── Main Content ── */}
      <div className="w-full max-w-6xl flex flex-col xl:flex-row gap-10 items-start justify-center">

        {/* ── Left: Form ── */}
        <div className="w-full xl:w-80 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm shadow-slate-200/50">
            <h2 className="text-slate-900 font-bold text-lg mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Card Information
            </h2>
            <InputForm name={name} onNameChange={setName} onImageChange={setImage} />

            {/* Card ID preview */}
            <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
              <InfoRow icon="🪪" label="Card ID" value={cardId} mono />
              <InfoRow icon="📅" label="Issue Date" value={dates.issueDate} />
              <InfoRow icon="⏳" label="Expiry" value={dates.expiryDate} />
            </div>
          </div>
        </div>

        {/* ── Right: Preview + Download ── */}
        <div className="flex-1 flex flex-col items-center gap-8 w-full">
          {/* Section label */}
          <div className="w-full flex items-center gap-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-200" />
            <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">Live Preview</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-200" />
          </div>

          {/* Card container – scaled based on viewport */}
          <div 
            className="w-full flex justify-center pb-2 overflow-hidden"
            style={{ height: `${500 * scale}px` }}
          >
            <div
              style={{ transform: `scale(${scale})`, transformOrigin: 'center top' }}
              className="transition-all duration-300 drop-shadow-2xl"
            >
              <CardPreview
                ref={cardRef}
                name={name}
                image={image}
                cardId={cardId}
                issueDate={dates.issueDate}
                expiryDate={dates.expiryDate}
              />
            </div>
          </div>

          {/* Status hint */}
          {!isReady && (
            <p className="text-slate-400 text-sm flex items-center gap-2 font-medium">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Enter your name and upload a photo to enable download.
            </p>
          )}

          <DownloadButton cardRef={cardRef} disabled={!isReady} />
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-16 text-center text-slate-400 text-xs space-y-1">
        <p className="font-medium">
          Developed by{' '}
          <a
            href="https://www.obaidullahmiazi.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-amber-600 transition-colors duration-200 font-bold underline decoration-slate-200 underline-offset-4"
          >
            Obaidullah Miazi
          </a>
        </p>
        <p>Cards are generated locally. No data is uploaded.</p>
      </footer>
    </main>
  );
}

function InfoRow({ icon, label, value, mono }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-slate-400 text-xs flex items-center gap-1.5 font-medium">
        <span>{icon}</span>{label}
      </span>
      <span className={`text-slate-600 text-xs font-bold ${mono ? 'font-mono tracking-wider' : ''}`}>{value}</span>
    </div>
  );
}
