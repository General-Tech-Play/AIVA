import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "IDODE DESTINY M",
  "jobTitle": "AI Value Architect & Agentic RAG Specialist",
  "description": "Expert in Agentic RAG, Knowledge Graphs, RAG Systems, and Data Engineering, delivering innovative AI solutions for enterprises.",
  "url": "https://Idode.io", // Replace with actual URL
  "sameAs": [
    "https://github.com/Holious-tech",
    "https://www.kaggle.com/idodedestinym",
    // Add LinkedIn or other profiles if available
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Retrieval-Augmented Generation (RAG)",
    "Knowledge Graphs",
    "Data Engineering",
    "Machine Learning",
    "AI Prototypes",
    "Enterprise AI Solutions",
  ],
}

export const metadata: Metadata = {
  title: "AI Value Architect",
  metadataBase: new URL('https://Idode.io'),
  description:
    "Expert AI Value Architect specializing in Agentic RAG, Knowledge Graphs, RAG Systems, and Data Engineering. Delivering high-impact AI solutions, prototypes, and scalable code for enterprises. Portfolio showcasing AI engineering expertise.",
  keywords: [
    "AI Value Architect",
    "Agentic RAG Specialist",
    "Knowledge Graphs",
    "RAG Systems",
    "Data Engineering",
    "AI Prototypes",
    "Enterprise AI Solutions",
    "Next.js Developer",
    "AI Engineering",
    "Retrieval-Augmented Generation",
    "Machine Learning Engineer",
    "AI Portfolio",
    "Semantic Search",
    "ETL Pipelines",
    "Vector Embeddings",
    "AI Innovation",
  ],
  authors: [{ name: "IDODE DESTINY M" }],
  creator: "IDODE DESTINY M",
  publisher: "AI Value Architect Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "IDODE DESTINY M: AI Value Architect & Agentic RAG Expert",
    description: "Discover expertise in Agentic RAG, Knowledge Graphs, and Data Engineering. Explore AI prototypes and enterprise solutions from a leading AI specialist.",
    url: "https://Idode.io", // Replace with actual URL when deployed
    siteName: "AI Value Architect Portfolio",
    images: [
      {
        url: "/professional-headshot.png", // Use actual image path
        width: 800,
        height: 600,
        alt: "IDODE DESTINY M - AI Value Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDODE DESTINY M | AI Value Architect",
    description: "Expert in Agentic RAG and AI engineering. View portfolio of innovative AI solutions.",
    images: ["/professional-headshot.png"],
  },
  icons: {
    icon: '/professional-headshot.png', // Use existing image as favicon or add a proper favicon.ico
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
