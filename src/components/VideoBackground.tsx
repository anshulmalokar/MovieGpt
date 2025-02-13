import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
};

export default function VideoBackground({children}: Props) {
  return (
    <div>
       <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/qkgkUCqEum4?autoplay=1&mute=1&loop=1&playlist=qkgkUCqEum4"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="relative z-10">{children}</div>
    </div>
  )
}