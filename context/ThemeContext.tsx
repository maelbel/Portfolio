import { createContext, useContext, useEffect, useState } from 'react';

// Définir le type du contexte
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook pour accéder au contexte du thème
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Le provider qui encapsulera toute l'application
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  // Fonction pour récupérer le thème initial
  const getInitialTheme = (): 'light' | 'dark' => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme());

  // Mettre à jour le thème dans localStorage et dans le document
  const updateTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Toggle entre "light" et "dark"
  const toggleTheme = () => {
    updateTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Charger le thème initial côté client
  useEffect(() => {
    const initialTheme = getInitialTheme();
    updateTheme(initialTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
