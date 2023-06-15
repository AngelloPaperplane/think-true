import { useState, useEffect } from 'react';

const useSessionStorage = () => {
  const [isOnline, setIsOnline] = useState('');

  useEffect(() => {
    setIsOnline(sessionStorage.getItem('isOnline'));
  }, []);

  return isOnline;
};

export default useSessionStorage;
