import RootStyleRegistry from '../lib/RootStyleRegistry';
import Foot from './footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
        <Foot />
      </body>
    </html>
  );
}
