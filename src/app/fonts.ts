import localFont from 'next/font/local';

export const ajouFont = localFont({
  src: '../../public/fonts/AjouOTF.otf',
  variable: '--font-ajou',
  display: 'swap',
}); 

export const taomFont = localFont({
  src: '../../public/fonts/BinggraeTaom.woff',
  variable: '--font-taom',
  display: 'swap',
}); 