import {
  SOCIAL_CARD_ALT,
  SOCIAL_CARD_CONTENT_TYPE,
  SOCIAL_CARD_SIZE,
  createSocialCardImage,
} from "@/lib/social-card";

// Segment config must be declared in this file. Next.js rejects re-exports of
// `runtime` (and related fields) from another module.
export const runtime = "edge";
export const alt = SOCIAL_CARD_ALT;
export const size = SOCIAL_CARD_SIZE;
export const contentType = SOCIAL_CARD_CONTENT_TYPE;

export default function TwitterImage() {
  return createSocialCardImage();
}
