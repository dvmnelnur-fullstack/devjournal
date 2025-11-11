"use client";

import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  src: string; // URL видео или путь к файлу
  type?: "video" | "gif";
  className?: string;
  overlay?: boolean; // Добавить затемнение для читаемости
  overlayOpacity?: number; // Прозрачность overlay (0-1)
}

export default function VideoBackground({
  src,
  type = "video",
  className = "",
  overlay = true,
  overlayOpacity = 0.5,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (type === "video" && videoRef.current) {
      // Автоматическое воспроизведение и зацикливание
      videoRef.current.play().catch((error) => {
        console.log("Автовоспроизведение заблокировано:", error);
      });
    }
  }, [type]);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {type === "video" ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={src}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}

