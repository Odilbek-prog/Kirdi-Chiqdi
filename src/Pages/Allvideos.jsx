import React from "react";
import Intro from "../Components/UI/Intro/Intro";
import { useTranslation } from "react-i18next";

const Allvideos = () => {
  const { t } = useTranslation();
  return (
    <div className="all">
      <Intro />
      <div className="all__wrapper">
        <h1 className="all__title">{t("video")}</h1>
        <div className="all__videos">
          <div className="video__banner all__video">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </div>
          <div className="video__banner all__video">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </div>
          <div className="video__banner all__video">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </div>
          <div className="video__banner all__video">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </div>
          <div className="video__banner all__video">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </div>
          <div className="video__banner all__video">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </div>
          <div className="video__banner all__video">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </div>
          <div className="video__banner all__video">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </div>
          <div className="video__banner all__video">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allvideos;
