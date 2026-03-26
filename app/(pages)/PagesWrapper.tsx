"use client";

import React from "react";
export default function PagesWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
