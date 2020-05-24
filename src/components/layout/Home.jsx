import React from "react";
import Header from "./mini-layouts/Header";
import Banner from "./mini-layouts/Banner";
import Courses from "./mini-layouts/Courses";
import SearchCourse from "./mini-layouts/SearchCourse";
import UpcomingEvents from "./mini-layouts/UpcomingEvents";
import UserRatings from "./mini-layouts/UserRatings";
import Footer from "./mini-layouts/Footer";
import RegisterAsATutor from "./mini-layouts/RegisterAsATutor";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Courses />
      <SearchCourse />
      <UpcomingEvents />
      <RegisterAsATutor />
      <UserRatings />
      <Footer />
    </div>
  );
};

export default Home;
