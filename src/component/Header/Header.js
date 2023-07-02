import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import BannerImg from "../../assets/banner.png";
import { Stats } from "./Stats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import StarImg from "../../assets/star.png";
import VisaImg from "../../assets/visa.png";
import MasterCard from "../../assets/mastercard.png";

export const Header = () => {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="row flex justify-between	">
            <div className="col-8 w-full text-start">
              <h2 className=" text-5xl font-semibold leading-7 text-black-600">
                Book <span className="text-orange-400"> Private Chef </span>
              </h2>
              <h2 className="text-5xl mt-4 font-semibold leading-7 text-black-600">
                for your
              </h2>
              <h2 className=" text-5xl mt-4 font-semibold text-black-600">
                Dinner <span className="text-orange-400"> Party </span>
              </h2>

              <p className="mt-6 text-md text-start text-gray-600">
                We’re providing the best Chef booking platform.{" "}
                <span className="block">
                  {" "}
                  Choose a menu and book your Chef instantlys ratione.
                </span>
              </p>

              <Stats />

              <div className="flex justify-between items-center w-2/3 mt-10">
                <div class="flex -space-x-2 overflow-hidden">
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>

                <div>
                  <h5 className="text-orange-400 font-bold	">
                    Our happy customers
                  </h5>
                  <div className="flex justify-between items-center">
                    <p className="flex">
                      {/* <FontAwesomeIcon icon={faStar} style={{color: "#fbff00",}} /> */}
                      <img src={StarImg} />
                      4.7
                    </p>
                    <p>(8.2K Review)</p>
                  </div>
                </div>

                <div>
                  <h6 style={{ color: "rgba(31, 31, 31, 0.50)" }} className="italic">We accept</h6>
                  <div className="flex justify-between">
                    <img src={VisaImg} />
                    <img src={MasterCard} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <img
                src={BannerImg}
                alt="Product screenshot"
                style={{ boxShadow: "none", width: "500px" }}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[27rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
