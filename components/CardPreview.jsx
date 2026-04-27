'use client';

import { forwardRef } from 'react';

const CardPreview = forwardRef(function CardPreview({ name, image, cardId, issueDate, expiryDate }, ref) {
  // Dark green color replacing the original dark blue
  const primaryColor = '#0F382A'; // Deep forest green
  const goldColor = '#C8A04B';
  const lightBg = '#F4F5F7';

  return (
    <div
      ref={ref}
      id="developer-card"
      style={{
        width: '800px',
        height: '500px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '24px',
        fontFamily: '"Inter", "Hind Siliguri", sans-serif',
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
        flexShrink: 0,
        backgroundColor: lightBg,
      }}
    >
      {/* ── Background Layer ── */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle wavy pattern background - simplified for better export compatibility */}
        <g stroke="rgba(0,0,0,0.03)" strokeWidth="1" fill="none">
          <path d="M-100,100 Q100,130 300,100 T700,100 T1100,100" />
          <path d="M-100,200 Q100,230 300,200 T700,200 T1100,200" />
          <path d="M-100,300 Q100,330 300,300 T700,300 T1100,300" />
          <path d="M-100,400 Q100,430 300,400 T700,400 T1100,400" />
        </g>

        {/* Top Dark Green Shape */}
        <path d="M0,0 L800,0 L800,160 C 500,280 300,120 0,160 Z" fill={primaryColor} />
        
        {/* Gold Curve Divider */}
        <path d="M0,160 C 300,120 500,280 800,160" fill="none" stroke={goldColor} strokeWidth="6" />

        {/* Footer Dark Green Shape */}
        <rect x="0" y="440" width="800" height="60" fill={primaryColor} />
      </svg>

      {/* ── Content Layer ── */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        
        {/* ── Top Left Logo ── */}
        <div style={{ position: 'absolute', top: '35px', left: '45px', width: '84px', height: '84px', borderRadius: '50%', backgroundColor: '#fff', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: `2px solid ${primaryColor}`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Gov Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
          </div>
        </div>

        {/* ── Top Header Text (SVG Text) ── */}
        <svg style={{ position: 'absolute', top: '46px', left: '160px', width: '500px', height: '100px', overflow: 'visible' }}>
          <text x="0" y="35" style={{ fontSize: '42px', fontWeight: '800', fill: '#fff', letterSpacing: '1px', fontFamily: 'inherit' }}>DEVELOPER CARD</text>
          <text x="0" y="75" style={{ fontSize: '18px', fontWeight: '500', fill: '#e2e8f0', letterSpacing: '0.5px', fontFamily: 'inherit' }}>
            উন্নয়নের অঙ্গীকার, ডিজিটাল বাংলাদেশের ভিত্তি
          </text>
        </svg>

        {/* ── EMV Chip (SVG) ── */}
        <div style={{ position: 'absolute', top: '190px', left: '100px' }}>
          <svg width="88" height="64" viewBox="0 0 88 64" fill="none">
            <rect width="88" height="64" rx="8" fill="#d4ae52" />
            <rect width="88" height="64" rx="8" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
            <rect x="8" y="8" width="72" height="48" rx="6" fill="#c39d37" />
            <path d="M 8 22 L 80 22 M 8 42 L 80 42" stroke="#d4ae52" strokeWidth="1.5" />
            <path d="M 30 8 L 30 56 M 58 8 L 58 56" stroke="#d4ae52" strokeWidth="1.5" />
            <path d="M 8 32 L 30 32 M 58 32 L 80 32" stroke="#d4ae52" strokeWidth="1.5" />
            <rect x="37" y="20" width="14" height="24" rx="7" stroke="#d4ae52" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* ── Laptop Icon & Text (SVG Text) ── */}
        <div style={{ position: 'absolute', top: '195px', left: '215px' }}>
          <svg width="250" height="60" viewBox="0 0 250 60" overflow="visible">
            <g transform="translate(0, 5)">
              <rect x="0" y="0" width="48" height="32" rx="2" stroke={primaryColor} strokeWidth="2.5" fill="none" />
              <line x1="-3" y1="42" x2="51" y2="42" stroke={primaryColor} strokeWidth="4" />
              <polyline points="18,12 10,20 18,28" stroke={primaryColor} strokeWidth="2" fill="none" />
              <polyline points="30,12 38,20 30,28" stroke={primaryColor} strokeWidth="2" fill="none" />
              <line x1="27" y1="12" x2="21" y2="28" stroke={primaryColor} strokeWidth="2" />
            </g>
            <text x="65" y="20" style={{ fontSize: '18px', fontWeight: '700', fill: '#1a202c', fontFamily: 'inherit' }}>ডিজিটাল দক্ষতা</text>
            <text x="65" y="44" style={{ fontSize: '18px', fontWeight: '700', fill: '#1a202c', fontFamily: 'inherit' }}>উন্নত বাংলাদেশ</text>
          </svg>
        </div>

        {/* ── Data Fields (SVG Text for absolute layout) ── */}
        <div style={{ position: 'absolute', top: '275px', left: '100px' }}>
          <svg width="450" height="150" viewBox="0 0 450 150" overflow="visible">
            <g transform="translate(0, 20)">
              <text x="0" y="0" style={{ fontSize: '20px', fontWeight: '600', fill: '#1a202c' }}>নাম</text>
              <text x="130" y="0" style={{ fontSize: '20px', fontWeight: '600', fill: '#1a202c' }}>: {name || 'আপনার নাম লিখুন'}</text>
              
              <text x="0" y="40" style={{ fontSize: '20px', fontWeight: '600', fill: '#1a202c' }}>কার্ড নং</text>
              <text x="130" y="40" style={{ fontSize: '20px', fontWeight: '600', fill: '#1a202c' }}>: {cardId}</text>
              
              <text x="0" y="80" style={{ fontSize: '20px', fontWeight: '600', fill: '#1a202c' }}>ইস্যু তারিখ</text>
              <text x="130" y="80" style={{ fontSize: '20px', fontWeight: '600', fill: '#1a202c' }}>: {issueDate}</text>
              
              <text x="0" y="120" style={{ fontSize: '20px', fontWeight: '600', fill: '#1a202c' }}>মেয়াদ উত্তীর্ণ</text>
              <text x="130" y="120" style={{ fontSize: '20px', fontWeight: '600', fill: '#1a202c' }}>: {expiryDate}</text>
            </g>
          </svg>
        </div>

        {/* ── Middle Right: Photo & Signature ── */}
        <div style={{ position: 'absolute', top: '48px', right: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '220px' }}>
          
          {/* Photo Container */}
          <div style={{ 
            width: '185px', 
            height: '235px', 
            borderRadius: '16px', 
            border: '3px solid #fff', 
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            overflow: 'hidden',
            backgroundColor: '#cbd5e1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span style={{ color: '#64748b', fontSize: '15px', fontWeight: '500' }}>PHOTO</span>
            )}
            <div style={{ position: 'absolute', inset: '4px', border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: '12px', pointerEvents: 'none' }} />
          </div>

          {/* Signature (SVG Text for exact positioning) */}
          <div style={{ marginTop: '55px', width: '100%' }}>
            <svg width="220" height="100" viewBox="0 0 220 100" overflow="visible">
              <text x="110" y="35" textAnchor="middle" style={{ fontFamily: '"Great Vibes", "Brush Script MT", cursive', fontSize: '28px', fill: '#1a202c' }}>khairul</text>
              <path d="M60,45 Q110,35 160,45" fill="none" stroke="#1a202c" strokeWidth="1.5" />
              
              <text x="110" y="68" textAnchor="middle" style={{ fontSize: '16px', fontWeight: '800', fill: '#1a202c' }}>খাইরুল দেওয়ান</text>
              <text x="110" y="88" textAnchor="middle" style={{ fontSize: '13px', fontWeight: '600', fill: '#1a202c' }}>প্রধান উপদেষ্টা</text>
            </svg>
          </div>
        </div>

        {/* ── Footer Area ── */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '800px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 50px', color: '#fff' }}>
          <FooterItem 
            icon={<LockIcon />} 
            text="ডিজিটাল নিরাপত্তা" 
          />
          <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <FooterItem 
            icon={<TechIcon />} 
            text="উদ্ভাবন ও প্রযুক্তি" 
          />
          <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <FooterItem 
            icon={<GrowthIcon />} 
            text="উন্নয়নের অঙ্গীকার" 
          />
        </div>

      </div>
    </div>
  );
});

CardPreview.displayName = 'CardPreview';
export default CardPreview;

/* ── Sub-components ── */

function DataRow({ label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '19px', color: '#1a202c' }}>
      <div style={{ width: '140px', fontWeight: '600' }}>{label}</div>
      <div style={{ width: '20px', textAlign: 'center', fontWeight: '600' }}>:</div>
      <div style={{ fontWeight: '700', letterSpacing: '0.5px' }}>{value}</div>
    </div>
  );
}

function FooterItem({ icon, text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', fontWeight: '500', letterSpacing: '0.5px' }}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

/* ── Icons ── */

function LockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 1 1 8 0v4" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-6" />
      <path d="M12 16c-3-3-6-3-6-6v-2" />
      <path d="M12 16c3-3 6-3 6-6v-2" />
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 6-6" />
      <path d="M18 8h3v3" />
      <rect x="6" y="13" width="2" height="2" fill="currentColor" />
      <rect x="10" y="9" width="2" height="2" fill="currentColor" />
      <rect x="14" y="13" width="2" height="2" fill="currentColor" />
      <rect x="17" y="7" width="2" height="2" fill="currentColor" />
    </svg>
  );
}
