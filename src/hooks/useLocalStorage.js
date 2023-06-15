import { useState, useEffect } from 'react';

const useLocalStorage = () => {
  const [isOnline, setIsOnline] = useState('');

  useEffect(() => {
    setIsOnline(localStorage.getItem('isOnline'));
  }, []);

  return isOnline;
};

export default useLocalStorage;
