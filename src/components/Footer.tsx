import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-10">
      <p className="text-center text-sm">{t("pages.footer.title")}</p>
    </div>
  );
};

export default Footer;
