import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Globe, LayoutDashboard } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s - OwlStack Docs',
    default: 'OwlStack Docs',
  },
  description: 'Unified Social Media Publishing SDK - Documentation',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className={`${GeistSans.className} flex flex-col min-h-screen`}>
        <RootProvider
          theme={{
            enabled: true,
          }}
        >
          <DocsLayout
            tree={source.pageTree}
            {...baseOptions()}
            sidebar={{
              footer: (
                <div className="flex items-center gap-2">
                  <a
                    href="https://owlstack.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="owlstack.dev"
                    className="inline-flex items-center justify-center rounded-md p-1.5 text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
                  >
                    <Globe className="size-4" />
                  </a>
                  <a
                    href="https://app.owlstack.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dashboard"
                    className="inline-flex items-center justify-center rounded-md p-1.5 text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
                  >
                    <LayoutDashboard className="size-4" />
                  </a>
                </div>
              ),
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
