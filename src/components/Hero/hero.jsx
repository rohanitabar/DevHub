import "./hero.css";
import { Platform } from "../platform";
export const Hero = ({
  title,
  primaryBtn,
  secondaryBtn,
  background,
}) => {
  return (
    <section className="hero">
      <img src={background} className="hero-img" alt="hero background" />

      <div className="overlay"></div>

      <div className="hero-content container">
        <h1 className="Title">{title}</h1>
        <div className="platforms">
          <Platform />
        </div>

        <div className="hero-actions">
          <button className="btn btn-primary">{primaryBtn}</button>
          <button className="btn btn-secondary">{secondaryBtn}</button>
        </div>
      </div>
    </section>
  );
};
