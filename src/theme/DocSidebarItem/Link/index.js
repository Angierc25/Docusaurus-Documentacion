import React from 'react';
import OriginalSidebarItemLink from '@theme-original/DocSidebarItem/Link';
import SidebarThemeToggle from '@site/src/components/SidebarThemeToggle';
import {
  FaHome,
  FaMousePointer,
  FaWindowMaximize,
  FaHandPointer,
  FaCode,
  FaTag,
  FaPaintBrush,
  FaBug,
  FaKeyboard,
  FaCubes,
  FaTerminal,
  FaChartLine,
  FaTachometerAlt,
  FaMobileAlt
} from 'react-icons/fa';

// Mapa de íconos personalizados por título
const iconMap = {
  'Inicio': <FaHome style={{ marginRight: 8 }} />,
  '¿Como abrir el Inspector?': <FaMousePointer style={{ marginRight: 8 }} />,
  'Interfaz': <FaWindowMaximize style={{ marginRight: 8 }} />,
  '¿Como seleccionar elementos en el DOM?': <FaHandPointer style={{ marginRight: 8 }} />,
  'Editar HTML': <FaCode style={{ marginRight: 8 }} />,
  'Añadir/eliminar atributos': <FaTag style={{ marginRight: 8 }} />,
  'Cambiar estilos en Tiempo Real': <FaPaintBrush style={{ marginRight: 8 }} />,
  'Debug': <FaBug style={{ marginRight: 8 }} />,
  'Atajos Recomendados': <FaKeyboard style={{ marginRight: 8 }} />,
  'Visualización': <FaCubes style={{ marginRight: 8 }} />,
  'Usos basicos de Consola': <FaTerminal style={{ marginRight: 8 }} />,
  'Depurar event listeners': <FaBug style={{ marginRight: 8 }} />,
  'Uso de pestaña Performance/Network': <FaChartLine style={{ marginRight: 8 }} />,
  'Identificar cuellos de botella': <FaTachometerAlt style={{ marginRight: 8 }} />,
  'Atajos de teclado': <FaKeyboard style={{ marginRight: 8 }} />,
  'Responsive': <FaMobileAlt style={{ marginRight: 8 }} />,
};

export default function DocSidebarItemLinkWrapper(props) {
  const originalLabel = props.item.label;
  const icon = iconMap[originalLabel];

  return (
    <OriginalSidebarItemLink
      {...props}
      item={{
        ...props.item,
        label: (
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            {originalLabel}
          </span>
        ),
      }}
    />
  );
}
