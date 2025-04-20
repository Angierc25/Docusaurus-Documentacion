import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function SidebarThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();

  const toggle = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggle}
      aria-label={colorMode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={colorMode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '20px',
        left: '235px',
        top: '10px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'var(--ifm-background-surface-color)',
        border: '1px solid var(--ifm-color-emphasis-200)',
        cursor: 'pointer',
        fontSize: '1rem',
        color: 'var(--ifm-color-content)',
        padding: 0,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 100,
        transition: 'all 0.2s ease-in-out',
      }}
    >
      {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}