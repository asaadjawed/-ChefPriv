import React, { Component } from "react";
import Slider from "react-slick";
import UserEllipse from "../../assets/user_ellipse.png";
import StarImg from "../../assets/star.png";

export default class Testimonal extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,

    };
    return (
      <div
        className=" mx-auto max-w-7xl pt-24 pb-24 lg:px-8"
        style={{ height: "800px" }}
      >
        <h2 className="text-5xl text-start font-bold"> What our</h2>
        <h2 className="text-5xl text-start font-bold flex gap-4">
          <span className="text-orange-400 block "> Customers</span> says{" "}
        </h2>
        <Slider {...settings} className="mt-10">
          <div>
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{
                borderRadius: "30px",
                backgroundColor: "#FFF",
                boxShadow: " 0px 15px 35px 0px rgba(189, 189, 189, 0.25)",
                padding: "50px",
              }}
            >
              <div class="w-full flex mb-4 items-center text-start">
                <div class="overflow-hidden  bg-white border border-none">
                  <img src={UserEllipse} alt="" />
                </div>
                <div class="flex-grow">
                  <h6 class="font-regular text-xl uppercase text-color-rgba(31, 31, 31, 1)">
                    William Smith
                  </h6>
                  <h6 className="text-md">Customers</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight text-justify leading-8	">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <img src={StarImg} />
                <h3 className="font-bold">4.7</h3>
              </div>
            </div>
          </div>
          <div>
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{
                borderRadius: "30px",
                backgroundColor: "#FFF",
                boxShadow: " 0px 15px 35px 0px rgba(189, 189, 189, 0.25)",
                padding: "50px",
              }}
            >
              <div class="w-full flex mb-4 items-center text-start">
                <div class="overflow-hidden  bg-white border border-none">
                  <img src={UserEllipse} alt="" />
                </div>
                <div class="flex-grow">
                  <h6 class="font-regular text-xl uppercase text-color-rgba(31, 31, 31, 1)">
                    William Smith
                  </h6>
                  <h6 className="text-md">Customers</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight text-justify leading-8	">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <img src={StarImg} />
                <h3 className="font-bold">4.7</h3>
              </div>
            </div>
          </div>
          <div>
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{
                borderRadius: "30px",
                backgroundColor: "#FFF",
                boxShadow: " 0px 15px 35px 0px rgba(189, 189, 189, 0.25)",
                padding: "50px",
              }}
            >
              <div class="w-full flex mb-4 items-center text-start">
                <div class="overflow-hidden  bg-white border border-none">
                  <img src={UserEllipse} alt="" />
                </div>
                <div class="flex-grow">
                  <h6 class="font-regular text-xl uppercase text-color-rgba(31, 31, 31, 1)">
                    William Smith
                  </h6>
                  <h6 className="text-md">Customers</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight text-justify leading-8	">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <img src={StarImg} />
                <h3 className="font-bold">4.7</h3>
              </div>
            </div>
          </div>
          <div>
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{
                borderRadius: "30px",
                backgroundColor: "#FFF",
                boxShadow: " 0px 15px 35px 0px rgba(189, 189, 189, 0.25)",
                padding: "50px",
              }}
            >
              <div class="w-full flex mb-4 items-center text-start">
                <div class="overflow-hidden  bg-white border border-none">
                  <img src={UserEllipse} alt="" />
                </div>
                <div class="flex-grow">
                  <h6 class="font-regular text-xl uppercase text-color-rgba(31, 31, 31, 1)">
                    William Smith
                  </h6>
                  <h6 className="text-md">Customers</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight text-justify leading-8	">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <img src={StarImg} />
                <h3 className="font-bold">4.7</h3>
              </div>
            </div>
          </div>
          <div>
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{
                borderRadius: "30px",
                backgroundColor: "#FFF",
                boxShadow: " 0px 15px 35px 0px rgba(189, 189, 189, 0.25)",
                padding: "50px",
              }}
            >
              <div class="w-full flex mb-4 items-center text-start">
                <div class="overflow-hidden  bg-white border border-none">
                  <img src={UserEllipse} alt="" />
                </div>
                <div class="flex-grow">
                  <h6 class="font-regular text-xl uppercase text-color-rgba(31, 31, 31, 1)">
                    William Smith
                  </h6>
                  <h6 className="text-md">Customers</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight text-justify leading-8	">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <img src={StarImg} />
                <h3 className="font-bold">4.7</h3>
              </div>
            </div>
          </div>
          <div>
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{
                borderRadius: "30px",
                backgroundColor: "#FFF",
                boxShadow: " 0px 15px 35px 0px rgba(189, 189, 189, 0.25)",
                padding: "50px",
              }}
            >
              <div class="w-full flex mb-4 items-center text-start">
                <div class="overflow-hidden  bg-white border border-none">
                  <img src={UserEllipse} alt="" />
                </div>
                <div class="flex-grow">
                  <h6 class="font-regular text-xl uppercase text-color-rgba(31, 31, 31, 1)">
                    William Smith
                  </h6>
                  <h6 className="text-md">Customers</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight text-justify leading-8	">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <img src={StarImg} />
                <h3 className="font-bold">4.7</h3>
              </div>
            </div>
          </div>
          <div>
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{
                borderRadius: "30px",
                backgroundColor: "#FFF",
                boxShadow: " 0px 15px 35px 0px rgba(189, 189, 189, 0.25)",
                padding: "50px",
              }}
            >
              <div class="w-full flex mb-4 items-center text-start">
                <div class="overflow-hidden  bg-white border border-none">
                  <img src={UserEllipse} alt="" />
                </div>
                <div class="flex-grow">
                  <h6 class="font-regular text-xl uppercase text-color-rgba(31, 31, 31, 1)">
                    William Smith
                  </h6>
                  <h6 className="text-md">Customers</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight text-justify leading-8	">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <img src={StarImg} />
                <h3 className="font-bold">4.7</h3>
              </div>
            </div>
          </div>
          <div>
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{
                borderRadius: "30px",
                backgroundColor: "#FFF",
                boxShadow: " 0px 15px 35px 0px rgba(189, 189, 189, 0.25)",
                padding: "50px",
              }}
            >
              <div class="w-full flex mb-4 items-center text-start">
                <div class="overflow-hidden  bg-white border border-none">
                  <img src={UserEllipse} alt="" />
                </div>
                <div class="flex-grow">
                  <h6 class="font-regular text-xl uppercase text-color-rgba(31, 31, 31, 1)">
                    William Smith
                  </h6>
                  <h6 className="text-md">Customers</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight text-justify leading-8	">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <img src={StarImg} />
                <h3 className="font-bold">4.7</h3>
              </div>
            </div>
          </div>
          <div>
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              style={{
                borderRadius: "30px",
                backgroundColor: "#FFF",
                boxShadow: " 0px 15px 35px 0px rgba(189, 189, 189, 0.25)",
                padding: "50px",
              }}
            >
              <div class="w-full flex mb-4 items-center text-start">
                <div class="overflow-hidden  bg-white border border-none">
                  <img src={UserEllipse} alt="" />
                </div>
                <div class="flex-grow">
                  <h6 class="font-regular text-xl uppercase text-color-rgba(31, 31, 31, 1)">
                    William Smith
                  </h6>
                  <h6 className="text-md">Customers</h6>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight text-justify leading-8	">
                  <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
              <div className="flex justify-end items-center mt-4">
                <img src={StarImg} />
                <h3 className="font-bold">4.7</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
