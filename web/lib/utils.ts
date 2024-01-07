import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyTextToClipboard = async (text: string) => {
  try {
    navigator.clipboard.writeText(text);
  } catch (err) {
    alert(`Failed to copy the following text:\n${text}`);
  }
};
