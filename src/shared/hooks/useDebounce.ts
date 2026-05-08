import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    // Set timeout untuk update debounced value
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    // Cleanup function - clear timeout jika value berubah lagi
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  
  return debouncedValue;
}