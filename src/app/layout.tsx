import type { Metadata } from 'next'

// These styles apply to every route in the application
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export const metadata: Metadata = {
    title: 'VBlog',
    description: 'Generated by @PhucPham',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">{children}</div>

                <Footer />
            </body>
        </html>
    )
}
