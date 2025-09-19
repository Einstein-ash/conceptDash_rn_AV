// src/components/menuData.ts

export interface MenuItemData {
  title: string;
  screen?: string; // Optional: only for links
  submenu?: MenuItemData[]; // Optional: only for accordions
}

export const MENU_DATA: MenuItemData[] = [
  { title: 'About', screen: 'About' },
  {
    title: 'Expertise',
    submenu: [
      {
        title: 'Construction',
        submenu: [
          { title: 'Project Management', screen: 'Construction_PM' },
          { title: 'Contract Administration', screen: 'Construction_Admin' },
          { title: 'Geotechnical', screen: 'Construction_Geotechnical' },
        ],
      },
      {
        title: 'Architecture & Planning',
        submenu: [
          { title: 'Urban planning & Design', screen: 'Arch_Urban' },
          { title: 'Rendering and Animation', screen: 'Arch_Rendering' },
          { title: 'Illumination Design', screen: 'Arch_Illumination' },
          { title: 'Building Information Modelling', screen: 'Arch_BIM' },
        ],
      },
      {
        title: 'Railways',
        submenu: [
          { title: 'Signalling Design', screen: 'Railways_Signalling' },
          { title: 'Railways Studies', screen: 'Railways_Studies' },
          { title: '3d and VR Visualization', screen: 'Railways_VR' },
          { title: 'BIM Services', screen: 'Railways_BIM' },
        ],
      },
      {
        title: 'Engineering',
        submenu: [
          { title: 'Water and Wastewater', screen: 'Engineering_Water' },
          { title: 'Traffic and Transportation', screen: 'Engineering_Traffic' },
          { title: 'Land Development', screen: 'Engineering_Land' },
          { title: 'Structural Design', screen: 'Engineering_Structural' },
          { title: 'Acoustics', screen: 'Engineering_Acoustics' },
        ],
      },
    ],
  },
  { title: 'Projects', screen: 'Projects' },
  { title: 'Stories', screen: 'Stories' },
  { title: 'Careers', screen: 'Careers' },
  { title: 'Contact', screen: 'Contact' },
];