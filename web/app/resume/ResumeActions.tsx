import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { CopyLink } from "./CopyLink";

export function ResumeActions() {
  return (
    <ul className="flex flex-wrap md:flex-col -m-0.5">
      <li className="p-0.5">
        <Button variant="ghost" asChild aria-label="View PDF">
          <Link href="/resume/file.pdf" target="_blank">
            <DownloadIcon className="w-5 h-5 mr-2" />
            PDF
          </Link>
        </Button>
      </li>
      <li className="p-0.5">
        <CopyLink />
      </li>
    </ul>
  );
}
