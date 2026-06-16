import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: `Contributors - ${SITE_NAME}`,
  description: `Meet the contributors behind ${SITE_NAME}.`,
  openGraph: {
    title: `Contributors - ${SITE_NAME}`,
    description: `Meet the contributors behind ${SITE_NAME}.`,
  },
};

export default function CreditsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
