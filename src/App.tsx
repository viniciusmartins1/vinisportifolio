import { useTranslation } from "react-i18next";
import { i18nLanguages } from "./i18n";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h2 className="text-3xl font-bold underline">{t("helloWorld")}</h2>
      {i18nLanguages.map(({ lng }) => (
        <button onClick={() => i18n.changeLanguage(lng)}>{lng}</button>
      ))}
    </div>
  );
}

export default App;
