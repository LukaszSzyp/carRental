import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;
  return (
    <>
      <h1>{t("cars")}</h1>
      <p>jezyk {lng}</p>
    </>
  );
}

export default App;
