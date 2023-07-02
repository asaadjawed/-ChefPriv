import React, { Component } from "react";
import Slider from "react-slick";
import SliderImg from "../../assets/slider_img.png";
import ElipseImg from "../../assets/ellipse.png";
import StarImg from "../../assets/star.png";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div
        className=" mx-auto max-w-7xl pt-24 pb-24 lg:px-8 flex gap-4 "
        style={{ height: "400px", marginTop: "150px" }}
      >
        <div>
          <h2 className="text-5xl font-bold text-start">
            {" "}
            Our Most{" "}
            <span className="block text-orange-400"> Popular Dishes </span>
            This Month{" "}
          </h2>
          <div className="text-start mt-6">
            <button
              className="bg-orange-400 rounded-3xl text-white"
              style={{ padding: "10px 50px" }}
            >
              See all
            </button>
          </div>
        </div>

        <div className="" style={{ width: "70%" }}>
          <Slider {...settings}>
            <div>
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                style={{
                  boxShadow: "0px 30px 70px 0px rgba(176, 176, 176, 0.25)",
                }}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={SliderImg} alt="" />
                </a>
                <div class="p-5 text-start">
                  <a href="#">
                    <h5 class="mb-2 text-sm font-normal tracking-tight dark:text-white">
                      Menu Title Here
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    Pick<span className="text-orange-400">5</span> out of{" "}
                    <span className="text-orange-400">10</span> dishes
                  </p>
                  <h2 className="text-base font-bold pb-2">QAR 200</h2>
                  <div
                    className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(31, 31, 31, 0.3)" }}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img src={ElipseImg} />
                      <h3 className="text-sm">Marriot Head Chef</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <img src={StarImg} />
                      <h3>4.5</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                style={{
                  boxShadow: "0px 30px 70px 0px rgba(176, 176, 176, 0.25)",
                }}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={SliderImg} alt="" />
                </a>
                <div class="p-5 text-start">
                  <a href="#">
                    <h5 class="mb-2 text-sm font-normal tracking-tight dark:text-white">
                      Menu Title Here
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    Pick<span className="text-orange-400">5</span> out of{" "}
                    <span className="text-orange-400">10</span> dishes
                  </p>
                  <h2 className="text-base font-bold pb-2">QAR 200</h2>
                  <div
                    className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(31, 31, 31, 0.3)" }}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img src={ElipseImg} />
                      <h3 className="text-sm">Marriot Head Chef</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <img src={StarImg} />
                      <h3>4.5</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                style={{
                  boxShadow: "0px 30px 70px 0px rgba(176, 176, 176, 0.25)",
                }}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={SliderImg} alt="" />
                </a>
                <div class="p-5 text-start">
                  <a href="#">
                    <h5 class="mb-2 text-sm font-normal tracking-tight dark:text-white">
                      Menu Title Here
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    Pick<span className="text-orange-400">5</span> out of{" "}
                    <span className="text-orange-400">10</span> dishes
                  </p>
                  <h2 className="text-base font-bold pb-2">QAR 200</h2>
                  <div
                    className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(31, 31, 31, 0.3)" }}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img src={ElipseImg} />
                      <h3 className="text-sm">Marriot Head Chef</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <img src={StarImg} />
                      <h3>4.5</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                style={{
                  boxShadow: "0px 30px 70px 0px rgba(176, 176, 176, 0.25)",
                }}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={SliderImg} alt="" />
                </a>
                <div class="p-5 text-start">
                  <a href="#">
                    <h5 class="mb-2 text-sm font-normal tracking-tight dark:text-white">
                      Menu Title Here
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    Pick<span className="text-orange-400">5</span> out of{" "}
                    <span className="text-orange-400">10</span> dishes
                  </p>
                  <h2 className="text-base font-bold pb-2">QAR 200</h2>
                  <div
                    className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(31, 31, 31, 0.3)" }}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img src={ElipseImg} />
                      <h3 className="text-sm">Marriot Head Chef</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <img src={StarImg} />
                      <h3>4.5</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                style={{
                  boxShadow: "0px 30px 70px 0px rgba(176, 176, 176, 0.25)",
                }}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={SliderImg} alt="" />
                </a>
                <div class="p-5 text-start">
                  <a href="#">
                    <h5 class="mb-2 text-sm font-normal tracking-tight dark:text-white">
                      Menu Title Here
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    Pick<span className="text-orange-400">5</span> out of{" "}
                    <span className="text-orange-400">10</span> dishes
                  </p>
                  <h2 className="text-base font-bold pb-2">QAR 200</h2>
                  <div
                    className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(31, 31, 31, 0.3)" }}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img src={ElipseImg} />
                      <h3 className="text-sm">Marriot Head Chef</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <img src={StarImg} />
                      <h3>4.5</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                style={{
                  boxShadow: "0px 30px 70px 0px rgba(176, 176, 176, 0.25)",
                }}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={SliderImg} alt="" />
                </a>
                <div class="p-5 text-start">
                  <a href="#">
                    <h5 class="mb-2 text-sm font-normal tracking-tight dark:text-white">
                      Menu Title Here
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    Pick<span className="text-orange-400">5</span> out of{" "}
                    <span className="text-orange-400">10</span> dishes
                  </p>
                  <h2 className="text-base font-bold pb-2">QAR 200</h2>
                  <div
                    className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(31, 31, 31, 0.3)" }}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img src={ElipseImg} />
                      <h3 className="text-sm">Marriot Head Chef</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <img src={StarImg} />
                      <h3>4.5</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                style={{
                  boxShadow: "0px 30px 70px 0px rgba(176, 176, 176, 0.25)",
                }}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={SliderImg} alt="" />
                </a>
                <div class="p-5 text-start">
                  <a href="#">
                    <h5 class="mb-2 text-sm font-normal tracking-tight dark:text-white">
                      Menu Title Here
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    Pick<span className="text-orange-400">5</span> out of{" "}
                    <span className="text-orange-400">10</span> dishes
                  </p>
                  <h2 className="text-base font-bold pb-2">QAR 200</h2>
                  <div
                    className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(31, 31, 31, 0.3)" }}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img src={ElipseImg} />
                      <h3 className="text-sm">Marriot Head Chef</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <img src={StarImg} />
                      <h3>4.5</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                style={{
                  boxShadow: "0px 30px 70px 0px rgba(176, 176, 176, 0.25)",
                }}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={SliderImg} alt="" />
                </a>
                <div class="p-5 text-start">
                  <a href="#">
                    <h5 class="mb-2 text-sm font-normal tracking-tight dark:text-white">
                      Menu Title Here
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    Pick<span className="text-orange-400">5</span> out of{" "}
                    <span className="text-orange-400">10</span> dishes
                  </p>
                  <h2 className="text-base font-bold pb-2">QAR 200</h2>
                  <div
                    className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(31, 31, 31, 0.3)" }}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img src={ElipseImg} />
                      <h3 className="text-sm">Marriot Head Chef</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <img src={StarImg} />
                      <h3>4.5</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                style={{
                  boxShadow: "0px 30px 70px 0px rgba(176, 176, 176, 0.25)",
                }}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={SliderImg} alt="" />
                </a>
                <div class="p-5 text-start">
                  <a href="#">
                    <h5 class="mb-2 text-sm font-normal tracking-tight dark:text-white">
                      Menu Title Here
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    Pick<span className="text-orange-400">5</span> out of{" "}
                    <span className="text-orange-400">10</span> dishes
                  </p>
                  <h2 className="text-base font-bold pb-2">QAR 200</h2>
                  <div
                    className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(31, 31, 31, 0.3)" }}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img src={ElipseImg} />
                      <h3 className="text-sm">Marriot Head Chef</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <img src={StarImg} />
                      <h3>4.5</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
