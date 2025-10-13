import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generates a full URL by combining the current origin with a path
 * @param path - The path to append to the base URL (e.g., "/resume", "/")
 * @returns The full URL (e.g., "https://shivamsabbarwal.com/resume")
 */
export function getFullUrl(path: string = ""): string {
  if (typeof window === "undefined") {
    // Server-side rendering fallback
    return `https://shivamsabbarwal.com${path}`;
  }
  
  return `${window.location.origin}${path}`;
}

/**
 * Gets the base URL for the current environment
 * @returns The base URL (e.g., "https://shivamsabbarwal.com")
 */
export function getBaseUrl(): string {
  if (typeof window === "undefined") {
    // Server-side rendering fallback
    return "https://shivamsabbarwal.com";
  }
  
  return window.location.origin;
}
