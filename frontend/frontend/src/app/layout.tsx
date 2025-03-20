import './globals.css';

export const metadata = {
  title: 'Lingovids MAS-AI',
  description: 'Translate and Dub Videos in Any Language',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
