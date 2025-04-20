// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Inicio',
      
    },
    {
      type: 'category',
      label: 'Inspeccionar Elementos',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'inspeccionar-elementos/abrir-inspector',
          label: '¿Como abrir el Inspector?',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/interfaz',
          label: 'Interfaz',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/seleccionar-elementos',
          label: '¿Como seleccionar elementos en el DOM?',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/modificar-html',
          label: 'Editar HTML',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/atributos',
          label: 'Añadir/eliminar atributos',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/modificar-css',
          label: 'Cambiar estilos en Tiempo Real',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/pseudo-clases',
          label: 'Debug',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/atributos',
          label: 'Atajos Recomendados',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/box-model',
          label: 'Visualización',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/consola',
          label: 'Usos basicos de Consola',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/eventos',
          label: 'Depurar event listeners',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/analisis',
          label: 'Uso de pestaña Performance/Network',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/optimizacion',
          label: 'Identificar cuellos de botella',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/shortcuts',
          label: 'Atajos de teclado',
        },
        {
          type: 'doc',
          id: 'inspeccionar-elementos/mobile',
          label: 'Responsive',
        },
      ],
    },

    
  ],
};

export default sidebars;