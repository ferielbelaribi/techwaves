import './globals.css'

export const metadata = {
  title: 'Techwaves ENSB - Dive Deep, Rise High',
  description: 'Techwaves ENSB - Club dédié à la technologie et l\'innovation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-gray-950 text-gray-900 dark:text-zinc-950 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}