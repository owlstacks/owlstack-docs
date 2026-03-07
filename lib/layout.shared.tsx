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
    themeSwitch: {
      enabled: true,
      mode: 'light-dark',
    },
  };
}
