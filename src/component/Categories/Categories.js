import React from "react";
import FirstItem from "../../assets/first_food.png";
import SecondItem from "../../assets/second_food.png";
import ThirdItem from "../../assets/third_food.png";
import FourthItem from "../../assets/fourth_food.png";
import FifthItem from "../../assets/fifth_food.png";

export const Categories = () => {
  return (
    <>
      <div style={{ background: "#F8F8F8", marginTop: "200px" }}>
        <div className="mx-auto max-w-7xl pt-24 pb-24 lg:px-8">
          <h2 className="text-4xl text-bold text-start pb-8">
            --- Browse by <span className="text-orange-400"> Categories </span>
          </h2>

          <div className="row flex justify-between gap-8">
            <div className="col-6">
              <div className="relative">
                <img src={FirstItem} />
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 600,
                  }}
                >
                  <h2 className="text-white font-normal text-4xl">
                    Explore Food
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-6 flex flex-col gap-14">
              <div className="flex justify-between gap-10">
                <div className="relative">
                  <img src={SecondItem} style={{ height: "310px" }} />

                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bottom: 30,
                    }}
                  >
                    <h2 className="text-white font-normal text-4xl">
                      Master Chefs{" "}
                    </h2>
                  </div>
                </div>
                <div className="relative">
                  <img src={ThirdItem} style={{ height: "310px" }} />

                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bottom: 30,
                    }}
                  >
                    <h2 className="text-white font-normal text-4xl">
                      Desserts
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-10">
                <div className="relative">
                  <img src={FourthItem} style={{ height: "310px" }} />
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bottom: 30,
                    }}
                  >
                    <h2 className="text-white font-normal text-4xl">Events</h2>
                  </div>
                </div>

                <div className="relative">
                  <img src={FifthItem} style={{ height: "310px" }} />

                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bottom: 30,
                    }}
                  >
                    <h2 className="text-white font-normal text-4xl">
                      Birthdays
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
