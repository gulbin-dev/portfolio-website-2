// context/LoadingContext.tsx
"use client";
import { createContext, useContext, useState } from "react";
import GlobalLoader from "@/app/(pages)/GlobalLoader";

const LoadingContext = createContext({
  isRevealed: false,
  setRevealed: (val: boolean) => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isRevealed, setRevealed] = useState(false);

  return (
    <LoadingContext.Provider value={{ isRevealed, setRevealed }}>
      {!isRevealed ? <GlobalLoader /> : children}
    </LoadingContext.Provider>
  );
};
