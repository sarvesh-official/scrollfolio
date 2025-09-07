"use client";

import Image from "next/image";
import { useState } from "react";
import { ModalPortal } from "./modal-portal";

interface Props {
  src: string;
  alt: string;
  title: string;
}

export function CertificateImagePreview({ src, alt, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-2">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 p-2 border border-border rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="relative w-12 h-12 rounded overflow-hidden z-10">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">Click to view</p>
          </div>
        </button>
      </div>

      <ModalPortal isOpen={isOpen}>
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ 
            zIndex: 999999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-background border border-border rounded-lg overflow-hidden shadow-2xl"
            style={{ zIndex: 1000000 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="relative w-full h-auto">
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </ModalPortal>
    </>
  );
}
