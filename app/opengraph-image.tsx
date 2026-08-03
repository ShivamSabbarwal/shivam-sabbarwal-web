import {
  SOCIAL_CARD_ALT,
  SOCIAL_CARD_CONTENT_TYPE,
  SOCIAL_CARD_SIZE,
  createSocialCardImage,
} from "@/lib/social-card";

export const runtime = "edge";
export const alt = SOCIAL_CARD_ALT;
export const size = SOCIAL_CARD_SIZE;
export const contentType = SOCIAL_CARD_CONTENT_TYPE;

export default function OpenGraphImage() {
  return createSocialCardImage();
}
