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
  "jobTitle": "AI Automation Specialist",
  "description": "Expert in Business Workflow Automation, Customer Support Automation, Booking Systems, and Inventory Management, delivering innovative AI solutions for enterprises.",
  "url": "https://Idode.io", // Replace with actual URL
  "sameAs": [
    "https://github.com/Holious-tech",
    "https://www.kaggle.com/idodedestinym",
    // Add LinkedIn or other profiles if available
  ],
  "knowsAbout": [
    "Business Workflow Automation",
    "Customer Support Automation", 
    "Booking System Automation",
    "Inventory Management",
    "Artificial Intelligence",
    "AI Prototypes",
    "Enterprise AI Solutions",
    "Process Automation",
    "Time Savings Automation",
    "ROI Optimization",
  ],
}

export const metadata: Metadata = {
  title: "AI Automation Specialist",
  metadataBase: new URL('https://Idode.io'),
  description:
    "Expert AI Automation Specialist specializing in business workflow automation, customer support automation, booking systems, and inventory management. Delivering high-impact AI solutions, prototypes, and scalable automation for enterprises. Portfolio showcasing AI automation expertise.",
  keywords: [
    "AI Automation Specialist",
    "Business Workflow Automation",
    "Customer Support Automation",
    "Booking System Automation", 
    "Inventory Management",
    "AI Prototypes",
    "Enterprise AI Solutions",
    "Next.js Developer",
    "AI Engineering",
    "Process Automation",
    "AI Portfolio",
    "Business Solutions",
    "Time Savings",
    "ROI Automation",
  ],
  authors: [{ name: "IDODE DESTINY M" }],
  creator: "IDODE DESTINY M",
  publisher: "AI Automation Specialist Portfolio",
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
    title: "IDODE DESTINY M: AI Automation Specialist",
    description: "Discover expertise in business workflow automation, customer support automation, and inventory management. Explore AI prototypes and enterprise solutions from a leading AI automation specialist.",
    url: "https://Idode.io", // Replace with actual URL when deployed
    siteName: "AI Automation Specialist Portfolio",
    images: [
      {
        url: "/professional-headshot.png", // Use actual image path
        width: 800,
        height: 600,
        alt: "IDODE DESTINY M - AI Automation Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDODE DESTINY M | AI Automation Specialist",
    description: "Expert in business workflow automation and AI engineering. View portfolio of innovative automation solutions.",
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
