import React from "react";
import FooterImg from "../../assets/footer_logo.png";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div
      className="text-center dark:bg-neutral-600 lg:text-left"
      style={{ backgroundColor: "rgba(31, 31, 31, 1)" }}
    >
      <div className="container p-6 mx-auto max-w-7xl pt-24 pb-24 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {/*First links section*/}
          <div className="mb-6">
            {/* <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
              Links
            </h5> */}
            <img src={FooterImg} alt="" />
            {/* <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Link 4
                </a>
              </li>
            </ul> */}
          </div>
          {/*Second links section*/}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-orange-400 dark:text-neutral-200">
              Address
            </h5>
            <ul
              className="mb-0 list-none"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <li>
                <a href="#!" className="text-white dark:text-neutral-200">
                  <FontAwesomeIcon icon={faLocationDot} /> Park Avenue South,
                  New York, 74812, United States
                </a>
              </li>
              <li>
                <a href="#!" className="text-white dark:text-neutral-200">
                  <FontAwesomeIcon icon={faMessage} /> contact@chefprive.com
                </a>
              </li>
              <li>
                <a href="#!" className="text-white dark:text-neutral-200">
                  <FontAwesomeIcon icon={faPhone} /> 000-123-456-
                </a>
              </li>
              <li className="flex gap-10 items-center">
                <a href="#!" className="text-white dark:text-neutral-200">
                  FAQ’s
                </a>
                <a href="#!" className="text-white dark:text-neutral-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/*Third links section*/}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-orange-400 dark:text-neutral-200">
              Links
            </h5>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <li>
                <a href="#!" className="text-white dark:text-neutral-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-white dark:text-neutral-200">
                  How it works
                </a>
              </li>
              <li>
                <a href="#!" className="text-white dark:text-neutral-200">
                  Our Chefs
                </a>
              </li>
              <li>
                <a href="#!" className="text-white dark:text-neutral-200">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#!" className="text-white dark:text-neutral-200">
                  What's new
                </a>
              </li>
            </ul>
          </div>
          {/*Fourth links section*/}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-orange-400 dark:text-neutral-200">
              Subcribe to Newsletter
            </h5>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <li className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-lg"
                  style={{ color: "#1F1F1F", padding: "5px" }}
                />
                <div className="bg-orange-400 w-12 h-12 rounded-lg text-white flex justify-center items-center">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white text-base dark:text-white-200"
                >
                  Our Social
                </a>
              </li>
              <li>
                <a href="#!" className="text-black-800 dark:text-neutral-200 flex gap-4">
                  <FontAwesomeIcon
                    className="fa-2xl"
                    icon={faFacebook}
                    style={{ color: "#e99607" }}
                  />
                  <FontAwesomeIcon
                    className="fa-2xl"
                    icon={faTwitter}
                    style={{ color: "#f08c00" }}
                  />
                  <FontAwesomeIcon
                    className="fa-2xl"
                    icon={faInstagram}
                    style={{ color: "#ffa200" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
