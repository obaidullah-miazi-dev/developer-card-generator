"use client";

import { useRef, useState } from "react";

export default function InputForm({ name, onNameChange, onImageChange }) {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFile = (file) => {
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      alert("Only JPG, PNG, or WEBP images are accepted.");
      return;
    }
    setFileName(file.name);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      onImageChange(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => {
    handleFile(e.target.files?.[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  return (
    <div className="w-full max-w-xl mx-auto space-y-5">
      {/* Name Input */}
      <div className="group">
        <label
          htmlFor="name-input"
          className="block text-sm font-bold text-slate-500 mb-2 tracking-wide uppercase"
        >
          আপনার নাম (Your Name)
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="আপনার নাম লিখুন"
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
          />
        </div>
      </div>

      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-bold text-slate-500 mb-2 tracking-wide uppercase">
          ছবি আপলোড করুন (Upload Photo)
        </label>
        <div
          id="drop-zone"
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`relative cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all duration-200
            ${
              isDragging
                ? "border-amber-500 bg-amber-50 scale-[1.02]"
                : "border-slate-200 bg-slate-50 hover:border-amber-500/50 hover:bg-slate-100"
            }`}
        >
          <input
            ref={fileInputRef}
            id="photo-input"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileInput}
            className="hidden"
          />
          <div className="flex flex-col items-center gap-3">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${isDragging ? "bg-amber-500/20" : "bg-slate-200"}`}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`transition-colors ${isDragging ? "text-amber-600" : "text-slate-400"}`}
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
            {fileName ? (
              <div className="space-y-1">
                <p className="text-amber-600 font-bold text-sm truncate max-w-xs">
                  {fileName}
                </p>
                <p className="text-slate-400 text-xs font-medium">
                  Click or drop to replace
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-slate-600 text-sm font-bold">
                  Drag & drop your photo here
                </p>
                <p className="text-slate-400 text-xs font-medium">
                  or click to browse · JPG, PNG, WEBP
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
