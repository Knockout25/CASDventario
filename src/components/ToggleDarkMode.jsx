import { SunIcon, MoonIcon } from '@phosphor-icons/react';
import ToggleButton from './ui/ToggleButton';
import { useState } from 'react';

export default function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="flex space-x-1">
      <SunIcon size={20} weight={!isDarkMode ? 'fill' : 'bold'} />
      <ToggleButton checked={isDarkMode} onChange={setIsDarkMode} />
      <MoonIcon size={20} weight={isDarkMode ? 'fill' : 'bold'} />
    </div>
  );
}
