import React from "react";

interface SkipLinkProps {
  label: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({ label }) => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only skip-link"
    >
      {label}
    </a>
  );
};
