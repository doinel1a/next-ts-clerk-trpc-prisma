'use client';

import React, { useCallback } from 'react';

import type { TTheme } from '@/lib/constants/shared';
import type { TLucideIconName } from '../lucide-icons';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { theme } from '@/lib/constants/shared';

import LucideIcon from '../lucide-icons';

export default function ThemeToggle() {
  const { setTheme } = useTheme();
  const onThemeClick = useCallback(
    (theme: TTheme) => {
      setTheme(theme);
    },
    [setTheme]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-testid='theme-toggle' variant='outline' size='icon'>
          <LucideIcon
            name='Sun'
            className='scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'
          />
          <LucideIcon
            name='MoonStar'
            className='absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0'
          />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid='theme-dropdown-content'>
        <DropdownMenuLabel>Toggle theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <MenuItem
          icon='Sun'
          label='Light'
          dataTestId='theme-light'
          onClick={() => {
            onThemeClick(theme.light);
          }}
        />
        <MenuItem
          icon='MoonStar'
          label='Dark'
          dataTestId='theme-dark'
          onClick={() => {
            onThemeClick(theme.dark);
          }}
        />
        <MenuItem
          icon='Laptop'
          label='System'
          dataTestId='theme-system'
          onClick={() => {
            onThemeClick(theme.system);
          }}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type TMenuItem = {
  icon: TLucideIconName;
  label: string;
  dataTestId: string;
  onClick: () => void;
};

function MenuItem({ icon, label, dataTestId, onClick }: Readonly<TMenuItem>) {
  return (
    <DropdownMenuItem data-testid={dataTestId} onClick={onClick}>
      <LucideIcon name={icon} className='mr-2' />
      <span>{label}</span>
    </DropdownMenuItem>
  );
}
