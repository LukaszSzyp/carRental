import { useTranslation } from 'react-i18next';
import Navbar from '../components/NavBar';
import { useEffect } from 'react';

function Layout() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}

export default Layout;
