import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import faCalenderDays from "@fortawesome/free-regular-svg-icons";
// import faUsersMedical from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    id: 1,
    name: "Al Shamal الشمال",
    value: "Select region",
    icon: "faTelegram",
    icon1: "faChevronDown",
  },
  {
    id: 2,
    name: "15 Jan - 20 Jan 2022",
    value: "Select date",
    icon: "faCalenderDays",
    icon1: "faChevronDown",
  },
  {
    id: 3,
    name: "5",
    value: "Select persons",
    icon: "faUsersMedical",
    icon1: "faChevronDown",
  },
];
export const Stats = () => {
  return (
    <div className="flex items-center mt-4 gap-8">
      <div
        className="bg-white p-2 sm:py-8 rounded-2xl"
        style={{
          "box-shadow": "0px 10px 30px 0px rgba(169, 169, 169, 0.25)",
          width: "75%",
        }}
      >
        <div className="flex flex-row gap-4 justify-between">
          <div
            className="flex flex-col gap-2"
            style={{
              borderRight: "1px solid rgba(31, 31, 31, 0.12)",
              paddingRight: "10px",
            }}
          >
            <div className="flex flex-row items-center gap-1">
              <FontAwesomeIcon icon={faTelegram} className="" />
              <h5>Select region</h5>
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                style={{ color: "#f04800" }}
              />
            </div>

            <div className="flex flex-row gap-y-1">
              <h6 style={{ color: "rgba(31, 31, 31, 0.50)" }}>
                Al Shamal الشمال
              </h6>
            </div>
          </div>

          <div
            className="flex flex-col  gap-2"
            style={{
              borderRight: "1px solid rgba(31, 31, 31, 0.12)",
              paddingRight: "10px",
            }}
          >
            <div
              className="flex flex-row items-center gap-4"
              style={{ borderRight: "rgba(31, 31, 31, 0.12);" }}
            >
              <FontAwesomeIcon icon={faCalendarDays} className="" />
              <h6>Select region</h6>
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                style={{ color: "#f04800" }}
              />
            </div>

            <div className="flex flex-row gap-y-1">
              <h6 style={{ color: "rgba(31, 31, 31, 0.50)" }}>
                15 Jan - 20 Jan 2022
              </h6>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div
              className="flex flex-row items-center gap-4"
              style={{ borderRight: "rgba(31, 31, 31, 0.12);" }}
            >
              <FontAwesomeIcon icon={faUserFriends} className="" />
              <h5>Select region</h5>
            </div>

            <div className="flex flex-row justify-around items-center">
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                style={{ color: "#f04800" }}
              />
              <h6 style={{ color: "rgba(31, 31, 31, 0.50)" }}>5</h6>
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                style={{ color: "#f04800" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-400 rounded-full relative w-16 h-16">
        <div
          className=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            className="fa-2x"
            icon={faChevronRight}
            style={{ color: "#f7f7f7" }}
          />
        </div>
      </div>
    </div>
  );
};
