'use client'

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from '@nextui-org/react';
import DashboardLayout from "@/components/blocks/DashboardLayout";
import { usePathname } from 'next/navigation'
import DeviceNotSup from "@/components/blocks/DeviceNotSup";

export function Providers({ children, ...props }) {
  const pathname = usePathname();
  const navPaths = ['/', '/todo'];

  const showNavbar = navPaths.includes(pathname);

  return (
    <NextUIProvider>
      <NextThemesProvider {...props}>
        <div className="md:hidden">
          <DeviceNotSup />
        </div>
        <div className="hidden md:block">
          {showNavbar ? (
            <DashboardLayout>
              {children}
            </DashboardLayout>
          ) : (
            children
          )}
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
