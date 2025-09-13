import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  onLoadingComplete?: () => void;
  setOnLoadingComplete: (callback: () => void) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [onLoadingComplete, setOnLoadingComplete] = useState<(() => void) | undefined>(undefined);

  const handleSetIsLoading = useCallback((loading: boolean) => {
    setIsLoading(loading);
    
    // If loading is being set to false and we have a callback, execute it
    if (!loading && onLoadingComplete) {
      onLoadingComplete();
    }
  }, [onLoadingComplete]);

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      setIsLoading: handleSetIsLoading,
      onLoadingComplete,
      setOnLoadingComplete
    }}>
      {children}
    </LoadingContext.Provider>
  );
};
