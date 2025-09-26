import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_HEIGHT = 80; // Hauteur du menu fixe
const OFFSET = 20; // Marge supplémentaire

export const useScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    const handleAnchorScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            const elementPosition = element.offsetTop - HEADER_HEIGHT - OFFSET;
            window.scrollTo({
              top: Math.max(0, elementPosition),
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Scroll au chargement de la page
    handleAnchorScroll();

    // Gérer les changements d'ancre
    const handleHashChange = () => {
      handleAnchorScroll();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);

  // Fonction utilitaire pour scroller vers une section depuis JavaScript
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - HEADER_HEIGHT - OFFSET;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
};