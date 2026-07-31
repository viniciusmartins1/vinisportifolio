import { useTranslation } from "react-i18next";
import { i18nLanguages } from "./i18n";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {t("helloWorld")}
      <br />
      {i18nLanguages.map(({ lng }) => (
        <button onClick={() => i18n.changeLanguage(lng)}>{lng}</button>
      ))}
    </div>
  );
}

export default App;
