import React from "react";
import check from "../../public/img/check.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Jobs = () => {
  const { t } = useTranslation();

  return (
    <div className="jobs">
      <div className="jobs__wrapper">
        <h1 className="jobs__title">{t("jobsTitle")}</h1>
        <div className="jobs__cards">
          <div className="jobs__card">
            <h3 className="jobs__subtitle">{t("callCenterOperator")}</h3>
            <div className="jobs__desc">
              <p className="jobs__req">{t("requiredSkills")}</p>
              <div className="jobs__reqcard">
                <img src={check} alt="" className="jobs__check" />
                <p className="jobs__text">{t("educationRequirement")}</p>
              </div>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="jobs__card">
            <h3 className="jobs__subtitle">{t("webDesigner")}</h3>
            <div className="jobs__desc">
              <p className="jobs__req">{t("requiredSkills")}</p>
              <div className="jobs__reqcard">
                <img src={check} alt="" className="jobs__check" />
                <p className="jobs__text">{t("experienceRequirement")}</p>
              </div>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="jobs__card">
            <h3 className="jobs__subtitle">{t("logist")}</h3>
            <div className="jobs__desc">
              <p className="jobs__req">{t("requiredSkills")}</p>
              <div className="jobs__reqcard">
                <img src={check} alt="" className="jobs__check" />
                <p className="jobs__text">{t("genericRequirement")}</p>
              </div>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
