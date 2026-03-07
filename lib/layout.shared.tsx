import { Globe, LayoutDashboard } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Root Layout: app/layout.tsx (includes docs layout)
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="OwlStack Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          OwlStack Docs
        </>
      ),
    },
    links: [
      {
        type: 'icon',
        icon: <Globe />,
        text: 'owlstack.dev',
        label: 'Visit owlstack.dev',
        url: 'https://owlstack.dev',
        external: true,
      },
      {
        type: 'button',
        icon: <LayoutDashboard />,
        text: 'Dashboard',
        url: 'https://app.owlstack.dev',
        external: true,
        secondary: true,
      },
    ],
    themeSwitch: {
      enabled: true,
      mode: 'light-dark',
    },
  };
}
