import { DeveloperGrid } from "../components/Hero/hero";
import BackgroundOverlay from "../assets/background-overlay.webp";
export const Home = () => {
  return (
    <>
      <DeveloperGrid
        background={BackgroundOverlay}
        title="کشف توسعه‌دهندگان و پروژه‌های متن‌باز
از محبوب‌ترین پلتفرم‌های برنامه‌نویس"
        subtitle=""
        primaryBtn="شروع جستجو"
        secondaryBtn="مشاهده توسعه‌دهندگان"
      />
    </>
  );
};
