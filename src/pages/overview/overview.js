import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./overview.module.css";
import axios from "axios";
import {
  UserContext,
  products,
} from "../../components/contextApi/userContextApi";
const Overview = () => {
  const { id } = useParams();
  console.log(id);
  const [profile, setProfile] = useState([]);
  //   const { cart, products } = useContext(UserContext);
  useEffect(() => {
    const profileData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: 'https://fakestoreapi.com/products',
          headers: {
            "Content-Type": "application/json",

          },
        });
        // setProfile(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    profileData();
  }, []);
  return (
    <>
      <div className={classes.price}>
           {profile.price}
      </div>
    </>
  );
};
export default Overview;
