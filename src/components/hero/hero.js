import classes from "./hero.module.css";
import backGroundImg from "../../assets/images/woman_hero.png";
import jumia1 from "../../assets/images/ads2.gif";
import jumia2 from "../../assets/images/ads1.png";
const Hero = () => {
  const getBox = () => {
    return document.querySelector(".box");
  };
  const next = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const prev = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <>
      <div className={classes.main}>
        <div className={classes.flex}>
          <div className={classes.text}>
            <span>trend</span>
            <h1>
              autum sales style <span className={classes.woman}>women</span>
            </h1>
            <div className={classes.discover}>
              <p>discover more</p>
            </div>
          </div>
          <div className={classes.woman}>
            <img src={backGroundImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
