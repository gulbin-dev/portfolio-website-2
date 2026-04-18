import React from "react";

export const Video = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <video
      className="tablet:max-w-80 aspect-video desktop:max-w-100"
      autoPlay
      muted
      controls
      poster="/public/image-placeholder.png"
      width={"100%"}
      height={"auto"}
      preload="metadata"
    >
      {children}
    </video>
  );
};

export const VideoLoader = () => {
  return (
    <div className="min-w-screen h-auto aspect-video tablet:min-w-80 desktop:min-w-100"></div>
  );
};
