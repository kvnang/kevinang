"use client";

import { Button } from "@/components/ui/button";
import { ClipboardIcon, DownloadIcon, Share2Icon } from "lucide-react";
import Link from "next/link";

export function ResumeActions() {
  return (
    <ul className="flex flex-wrap md:flex-col -m-0.5">
      <li className="p-0.5">
        <Button variant="ghost" asChild>
          <Link href="/resume/file.pdf" target="_blank">
            <DownloadIcon className="w-5 h-5 mr-2" />
            PDF
          </Link>
        </Button>
      </li>
      {/* <li className="p-0.5">
        <Button variant="ghost">
          <ClipboardIcon className="w-5 h-5 mr-2" />
          Copy Text
        </Button>
      </li>
      <li className="p-0.5">
        <Button variant="ghost">
          <Share2Icon className="w-5 h-5 mr-2" />
          Share
        </Button>
      </li> */}
    </ul>
  );
}
