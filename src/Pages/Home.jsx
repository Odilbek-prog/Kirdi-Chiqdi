import React from "react";
import Intro from "../Components/UI/Intro/Intro";
import Location from "../Components/UI/Location/Location";
import Video from "../Components/UI/Video/Video";
import What from "../Components/UI/What/What";
import Team from "../Components/UI/Team/Team";
import Trust from "../Components/UI/Trust/Trust";
import Contact from "../Components/UI/Contact/Contact";
import Aboutus from "../Components/UI/Aboutus/Aboutus";
import Review from "../Components/UI/Review/Review";

const Home = () => {
  return (
    <>
      <Intro />
      <Location />
      <Video />
      <What />
      <Team />
      <Trust />
      <Contact />
      <Aboutus />
      <Review />
    </>
  );
};

export default Home;
