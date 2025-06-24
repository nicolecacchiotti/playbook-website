'use client';
import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode"
        checked={darkMode}
        onCheckedChange={setDarkMode}
        aria-label="Dark mode toggle"
      />
      <Label htmlFor="dark-mode">Dark mode</Label>
    </div>
  );
} 