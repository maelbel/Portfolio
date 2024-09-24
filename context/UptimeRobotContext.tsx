import { createContext, useContext, useEffect, useState } from 'react';
import { getMonitors } from '@/utils/monitors';

interface Monitor {
  id: number;
  friendly_name: string;
  url: string;
  type: number;
  status: number;
  create_datetime: number;
}

interface MonitorData {
  stat: string;
  pagination: {
    offset: number;
    limit: number;
    total: number;
  };
  monitors: Monitor[];
}

interface MonitorContextType {
  monitors: MonitorData | null; // Ou undefined si c'est possible
}

// Création du contexte
const MonitorContext = createContext<MonitorContextType | undefined>(undefined);

// Hook pour accéder au contexte du thème
export const useMonitor = () => {
    const context = useContext(MonitorContext);
    if (!context) {
      throw new Error('useMonitor must be used within a MonitorProvider');
    }
    return context;
};

// Provider du contexte
export const MonitorProvider = ({ children }: { children: React.ReactNode }) => {
  const [monitors, setMonitors] = useState(null);

  const fetchMonitor = async () => {
    try {
      const result = await getMonitors(); // Remplace par ton API
      setMonitors(result); // Met à jour les données
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    fetchMonitor(); // Appel initial
    const interval = setInterval(fetchMonitor, 60000); // Appel toutes les minutes

    return () => clearInterval(interval); // Nettoyage de l'intervalle au démontage
  }, []);

  return (
    <MonitorContext.Provider value={{monitors}}>
      {children}
    </MonitorContext.Provider>
  );
};