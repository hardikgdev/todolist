'use client'

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from '@nextui-org/react';
import DashboardLayout from "@/components/blocks/DashboardLayout";
import { usePathname } from 'next/navigation';
import DeviceNotSup from "@/components/blocks/DeviceNotSup";
import { SessionProvider } from "next-auth/react";

export function Providers({ children, session, ...props }) {
  const pathname = usePathname();
  const navPaths = ['/', '/todo'];

  const showNavbar = navPaths.includes(pathname);

  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}
