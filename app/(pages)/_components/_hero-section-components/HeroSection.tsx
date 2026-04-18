import { useHeroImageSequence } from "@/app/hooks/home-page-gsap/useHeroSectionGSAP";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { useLoading } from "@/app/utils/LoadingContext";

export const HeroCanvas = () => {
  const { isRevealed } = useLoading();
  useHeroImageSequence(isRevealed);
  return (
    <canvas
      id="hero-canvas"
      className="absolute top-35 left-0 tablet:bottom-0"
      data-speed="0.5"
    ></canvas>
  );
};

export const HeroCanvasImageLoader = () => {
  return (
    <Image
      src="/frame-image/frame-image-1.png"
      alt="Hero image loader"
      className="blur-sm aspect-video object-cover origin-top scale-60"
      fill
      sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
    />
  );
};
