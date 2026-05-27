import './globals.css'

export const metadata = {
  title: 'The Blue Heron Black Hills',
  description: 'Elevated dining in the heart of the Black Hills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
