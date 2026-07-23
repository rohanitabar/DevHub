import BackgroundOverlay from "../../assets/background-overlay.webp";
import "./hero.css";
export const DeveloperGrid = () => {
  return (
    <div className="hero">
      <img
        src={BackgroundOverlay}
        className="Overlay-img"
        alt="backgroundOverlay"
      />
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="Title">بزرگ‌ترین جامعه توسعه‌دهندگان را کشف کن  </h1>
        <h3 className="Title">جستجو، مشاهده و دنبال کردن برنامه‌نویسان </h3>
        <div className="btn-container">
        <button className="start">شروع جست و جو</button>
        <button className="start"> جست و جو توسعه دهندگان</button>
        </div>
      </div>
    </div>
  );
};
