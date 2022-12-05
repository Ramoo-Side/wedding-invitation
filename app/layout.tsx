import RootStyleRegistry from './RootStyleRegistry';
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </html>
  );
}
