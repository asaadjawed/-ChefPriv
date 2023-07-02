import React from "react";
import BannerDownload from "../../assets/mobile.png";
import Mockup from "../../assets/mockup.png";
import AppStore from "../../assets/app_store.png";
import GooglePlay from "../../assets/google_play.png";

export const DownloadImage = () => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between pt-32 lg:px-8">
        <div className="relative">
          <img src={BannerDownload} />

          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              height: "100%",
              top: 50,
              left: 50,
            }}
          >
            <img src={Mockup} />

            <div>
              <h1 className="text-4xl text-white font-bold">
                Download our Mobile App
              </h1>
              <div className="flex justify-between items-center mt-8">
                <img src={GooglePlay} width={250} />
                <img src={AppStore} width={250} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
