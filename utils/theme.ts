"use client";

export const setTheme = (theme: 'light' | 'dark') => {

    const isDark = theme === 'dark';
  
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  
    // Stocker le thème dans localStorage pour persistance
    localStorage.setItem('theme', theme);
};
  
export const getInitialTheme = (): 'light' | 'dark' => {
    // Vérifier si l'utilisateur a un thème stocké dans localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme; // Retourne uniquement "light" ou "dark"
    }

    // Sinon, suivez le thème du système d'exploitation
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    
    // Valeur par défaut si on est sur le serveur ou si aucune préférence n'est définie
    return 'light';
};