import { useState } from 'react';

const useNavigation = (initialPage = 'home') => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    currentPage,
    isMenuOpen,
    navigateTo,
    toggleMenu
  };
};

export default useNavigation;
