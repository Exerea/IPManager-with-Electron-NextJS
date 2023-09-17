import './globals.css'

export const metadata = {
  title: 'IPManager',
  description: 'This app makes your business life to be more better',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}