// import { useTranslation } from "react-i18next";
// import { i18nLanguages } from "./i18n";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

function App() {
  // const { t, i18n } = useTranslation();

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-16">
        <Header />
        <Home />
        <AboutMe />
        {/* <h2 className="text-3xl font-bold underline">{t("helloWorld")}</h2>
        {i18nLanguages.map(({ lng }) => (
          <button onClick={() => i18n.changeLanguage(lng)}>{lng}</button>
        ))} */}
      </div>
    </div>
  );
}

export default App;
