'use client';

import { useState } from 'react';
import { toPng } from 'html-to-image';

export default function DownloadButton({ cardRef, disabled }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current || disabled) return;
    setLoading(true);
    
    // Helper to trigger download
    const triggerDownload = (url, ext) => {
      const link = document.createElement('a');
      link.download = `developer-card-${Math.floor(Date.now() / 1000)}.${ext}`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    try {
      // 1. Try high-quality PNG with skipFonts: true to avoid SecurityError
      const pngUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        skipFonts: true,
      });
      if (pngUrl) {
        triggerDownload(pngUrl, 'png');
        setLoading(false);
        return;
      }
    } catch (e) {
      console.warn('PNG capture failed, trying JPEG...');
    }

    try {
      // 2. Try high-quality JPEG
      const { toJpeg } = await import('html-to-image');
      const jpgUrl = await toJpeg(cardRef.current, {
        pixelRatio: 2,
        quality: 0.95,
        cacheBust: true,
        skipFonts: true,
      });
      if (jpgUrl) {
        triggerDownload(jpgUrl, 'jpg');
        setLoading(false);
        return;
      }
    } catch (e) {
      console.warn('JPEG capture failed, trying basic PNG...');
    }

    try {
      // 3. Last resort: basic 1x capture
      const basicUrl = await toPng(cardRef.current, { 
        cacheBust: true,
        skipFonts: true 
      });
      if (basicUrl) {
        triggerDownload(basicUrl, 'png');
      }
    } catch (e) {
      console.error('All capture methods failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      id="download-btn"
      onClick={handleDownload}
      disabled={disabled || loading}
      className={`
        relative group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm tracking-widest uppercase
        transition-all duration-300 overflow-hidden select-none
        ${disabled
          ? 'bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed'
          : 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 hover:from-amber-400 hover:to-yellow-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(245,158,11,0.45)] active:scale-100 cursor-pointer shadow-lg shadow-amber-500/20'
        }
      `}
    >
      {/* Shimmer on hover */}
      {!disabled && (
        <span
          className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
        />
      )}

      {loading ? (
        <>
          {/* Spinner */}
          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Generating...</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <span>Download Card</span>
        </>
      )}
    </button>
  );
}
