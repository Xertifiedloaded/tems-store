import { useState } from "react";
import { LocationData } from "../../constant/constant";
import classes from "./form.module.css";

const FormInfo = () => {
  const [choose, setChoose] = useState("");
  const [name, setName] = useState("");
  const setChooseFunc = (index) => {
    setChoose(index);
  };
  const setNameFunc = (index) => {
    setChoose(index);
  };
  const [activeLocation, setActiveLocation] = useState(false);
  const activeLocationData = () => {
    setActiveLocation(!activeLocation);
  };
  return (
    <>
      <form action="">
        <div className={classes.inputs}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="enter your name" />
        </div>
        <div className={classes.inputs}>
          <label htmlFor="name">Address</label>
          <input type="text" placeholder="enter your name" />
        </div>
        <div className={classes.location} onClick={activeLocationData}>
          <div className={classes.locatn}>
            <p>choose your location</p>
            <span>{choose}</span>
          </div>
          {activeLocation && (
            <div className={classes.locationId}>
              {LocationData.map((item, i) => (
                <LocationInfo
                  setNameFunc={setNameFunc}
                  setChooseFunc={setChooseFunc}
                  {...item}
                  key={i}
                  index={i}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>
      </form>
    </>
  );
};
export default FormInfo;
const LocationInfo = ({
  price,
  index,
  name,
  item,
  key,
  location,
  setNameFunc,
  id,
  setChooseFunc,
}) => {
  return (
    <div key={id} className={classes.locationPrice}>
      <div
        key={id}
        className={classes.locationName}
        onClick={() => setChooseFunc(location)}
      >
        {location}
      </div>
      <div className={classes.locationPrice}>&#8358; {price}</div>
    </div>
  );
};
