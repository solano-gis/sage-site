import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SAGE — Solano Agent for Geographic Enquiry',
  description:
    'AI-powered GIS assistant for Solano County. Parcels, zoning, hazards, regulations, budget — connected through natural language.',
  openGraph: {
    title: 'SAGE — Solano Agent for Geographic Enquiry',
    description:
      'AI-powered GIS assistant for Solano County. Parcels, zoning, hazards, regulations, budget — connected through natural language.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
