declare module 'react-scrollspy-nav' {
    import { ReactNode, ComponentType } from 'react';
  
    interface ScrollspyNavProps {
      scrollTargetIds: string[];
      offset?: number;
      activeNavClass?: string;
      scrollDuration?: string;
      headerBackground?: string;
      children?: ReactNode; // Ajout de la propriété `children`
    }
  
    const ScrollspyNav: ComponentType<ScrollspyNavProps>;
  
    export default ScrollspyNav;
  }
  