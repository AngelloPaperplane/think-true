import React, { useState } from 'react';
import localFont from 'next/font/local';
const Aleo = localFont({ src: '../styles/fonts/Aleo-Regular.ttf' });
const NewsCycle = localFont({
  src: [
    {
      path: '../styles/fonts/NewsCycle-Bold.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/NewsCycle-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
/* const ProximaNova = localFont({
  src: [
    {
      path: '../styles/fonts/Proximanova-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Proximanova-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});*/
export const ThinkTrue = React.createContext({});

const ThinkTrueProvider = ({ children }) => {
  const [pageLoaded, setPageLoaded] = useState(true);
  return (
    <ThinkTrue.Provider
      value={{ Aleo, NewsCycle, pageLoaded /* , ProximaNova*/, setPageLoaded }}>
      {children}
    </ThinkTrue.Provider>
  );
};

export default ThinkTrueProvider;
