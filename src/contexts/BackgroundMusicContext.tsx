import { createContext, useContext, type ReactNode } from 'react';
import { useBackgroundMusic } from '@/lib/audio/backgroundMusic';

interface BackgroundMusicContextType {
  toggleBackgroundMusic: () => Promise<void>;
  startBackgroundMusic: () => Promise<void>;
  isPlaying: boolean;
}

const BackgroundMusicContext = createContext<BackgroundMusicContextType | undefined>(undefined);

export const useBackgroundMusicContext = () => {
  const context = useContext(BackgroundMusicContext);
  if (context === undefined) {
    throw new Error('useBackgroundMusicContext must be used within a BackgroundMusicProvider');
  }
  return context;
};

interface BackgroundMusicProviderProps {
  children: ReactNode;
}

export const BackgroundMusicProvider = ({ children }: BackgroundMusicProviderProps) => {
  const { toggleBackgroundMusic, startBackgroundMusic, isPlaying } = useBackgroundMusic();

  return (
    <BackgroundMusicContext.Provider value={{
      toggleBackgroundMusic,
      startBackgroundMusic,
      isPlaying
    }}>
      {children}
    </BackgroundMusicContext.Provider>
  );
};
