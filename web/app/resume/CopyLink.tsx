"use client";

import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/lib/constants";
import { copyTextToClipboard } from "@/lib/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import * as React from "react";

export function CopyLink() {
  const [copied, setCopied] = React.useState(false);

  const copyText = () => {
    copyTextToClipboard(new URL("/resume", BASE_URL).toString());
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button
      variant="ghost"
      onClick={copyText}
      disabled={copied}
      aria-label="Copy Link"
    >
      {copied ? (
        <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
      ) : (
        <ClipboardIcon className="w-5 h-5 mr-2" />
      )}
      {copied ? "Copied!" : "Copy Link"}
    </Button>
  );
}
