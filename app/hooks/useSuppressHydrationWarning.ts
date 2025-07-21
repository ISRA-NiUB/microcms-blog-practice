import { useEffect, useState } from 'react';

export function useSuppressHydrationWarning() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
} 