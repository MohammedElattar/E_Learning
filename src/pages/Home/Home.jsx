import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/home-landing.png";
import whyUsShape from "../../images/home-blue-shape.svg";
import "./Home.scss";
import { FaPencilRuler, FaTrophy, FaUserGraduate } from "react-icons/fa";
function Home() {
  return (
    <>
      <div className="home-landing">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <div className="text">
            <h1>Get the best education with EduAppGT PRO</h1>
            <p>
              Connect with teachers who are 100% trained and available to help
              your education.
            </p>
            <div className="btns d-flex gap-1">
              <Link to="/" className="yellow">
                Try it for free
              </Link>
              <Link to="/" className="blue">
                How it works?
              </Link>
            </div>
          </div>
          <div className="img">
            <img src={img1} className="img-fluid" alt="landing-img" />
          </div>
        </div>
      </div>
      <div className="why-us">
        <div className="container">
          <div className="title">
            <h1 className="text-primary text-center">Why choose us?</h1>
            <p className="fs-4 text-center text-dark">
              Know all the benefits you will have when using EduAppGT PRO
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-4 p-2">
              <div className="box">
                <div className="icon" style={{ backgroundColor: "#3d81c2" }}>
                  <FaUserGraduate />
                </div>
                <h3>Teachers availability</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-2">
              <div className="box">
                <div className="icon" style={{ backgroundColor: "#ff60a8" }}>
                  <FaTrophy />
                </div>
                <h3>24/7 Availability</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-2">
              <div className="box">
                <div className="icon" style={{ backgroundColor: "#a6cf4a" }}>
                  <FaPencilRuler />
                </div>
                <h3>Class Whiteboard</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute-text">
          <div className="container">
            <img src={whyUsShape} className="bg" alt="bg" />
            <h1 className="d-none text-white d-lg-block text-center">
              All tools in one platform
            </h1>
            <p className="text-center fs-3 text-white mt-2">
              Connect, chat and learn with EduAppGT PRO - School Management
              System.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
