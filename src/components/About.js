import "./About.scss";

export const About = () => {
  return (
    <div className="about-container">
      <div className="initial-desc-container">
        <div className="img-container stc-display-inline-block"></div>
        <div className="about-initial-desc stc-display-inline-block">
          Detailed About explanation
        </div>
      </div>
      <div className="additional-desc-container"> Some Additional Description</div>
    </div>
  );
};
