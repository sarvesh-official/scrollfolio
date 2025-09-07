"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CertificateImagePreview } from "./certificate-image-preview";

interface Props {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills?: readonly string[];
  url?: string;
  image?: string;
  certificateImage?: string;
}

export function CertificationCard({
  title,
  issuer,
  date,
  credentialId,
  skills,
  url,
  image,
  certificateImage,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {date && (
          <time className="text-xs text-muted-foreground">{date}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {issuer && (
          <p className="text-sm text-muted-foreground">{issuer}</p>
        )}
        {credentialId && (
          <p className="text-xs text-muted-foreground">ID: {credentialId}</p>
        )}
        {skills && skills.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap items-start gap-1">
            {skills.map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
        {certificateImage && (
          <CertificateImagePreview
            src={certificateImage}
            alt={`${title} Certificate`}
            title={`${title} Certificate`}
          />
        )}
      </div>
      {url && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <Badge className="flex gap-2">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Credential
            </Badge>
          </Link>
        </div>
      )}
    </li>
  );
}
