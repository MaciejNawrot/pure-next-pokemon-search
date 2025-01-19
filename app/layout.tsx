import './globals.css'
import MainHeader from "@/components/MainHeader";

export const metadata = {
  title: 'Pokemon finder',
  description: 'Simple app to search for pokemons.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }> ) {
  return (
    <html lang="en">
    <body>
      <MainHeader />
      {children}
    </body>
    </html>
  );
}
