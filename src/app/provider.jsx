'use client'

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from '@nextui-org/react';
import DashboardLayout from "@/components/blocks/DashboardLayout";
import { usePathname } from 'next/navigation'

export function Providers({ children, ...props }) {
  const pathname = usePathname();
  const navPaths = ['/'];

  const showNavbar = navPaths.includes(pathname);

  return (
    <NextUIProvider>
      <NextThemesProvider {...props}>
        {showNavbar ? (
          <DashboardLayout>
            {children}
          </DashboardLayout>
        ) : (
          children
        )}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
