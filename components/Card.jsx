import Link from "next/link";
import { useState } from "react";

export default function Card(props) {
  const [isLightHovered, setIsLightHovered] = useState(false);
  const [isDarkHovered, setIsDarkHovered] = useState(false);

  const ribbonColor = isLightHovered ? "#905cff" : "#dcccff";

  const bgColorDarkClass = isDarkHovered ? "bg-light-blue" : "bg-dark-blue";
  const bgColorLightClass = isLightHovered ? "bg-dark-blue" : "bg-light-blue";

  const textLightColor = isLightHovered ? "text-black" : "text-white";
  const textDarkColor = isDarkHovered ? "text-white" : "text-purple";

  return (
    <>
      <div className="col-md-3 px-2 px-lg-0 my-5">
        <div
          className="card shadow rounded-3 bg-safed border-0 card-grow"
          onMouseEnter={() => {
            setIsLightHovered(true);
            setIsDarkHovered(true);
          }}
          onMouseLeave={() => {
            setIsLightHovered(false);
            setIsDarkHovered(false);
          }}
        >
          <div className={`rounded text-lato ${bgColorLightClass}`}>
            <div className="row">
              <div className="col-8 border-0">
                <div
                  className={`${bgColorDarkClass} px-3 py-2 d-flex align-items-center fs-7 fw-bold ${textLightColor}`}
                  style={{
                    width: "200px",
                    height: "30px",
                    position: "relative",
                  }}
                >
                  {props.class} Sessions
                  <div
                    style={{
                      content: "",
                      position: "absolute",
                      right: "0",
                      bottom: "0",
                      width: "0",
                      height: "0",
                      borderRight: `30px solid ${ribbonColor}`,
                      borderTop: "15px solid transparent",
                      borderBottom: "15px solid transparent",
                    }}
                  ></div>
                  <div
                    style={{
                      content: "",
                      position: "absolute",
                      left: "-20px",
                      bottom: "0",
                      width: "0",
                      height: "0",
                      borderRight: `30px solid ${ribbonColor}`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-end">
                <div
                  className={`${bgColorDarkClass} bottom-left quadrant fw-bolder text-center border-0 py-2 pe-2 ps-4`}
                >
                  20% off
                </div>
              </div>
            </div>
            <div className="card-header pb-0 border-0 bg-transparent">
              <h5 className={`${textDarkColor}`}>{props.name}</h5>
              <p className={`${textDarkColor}`}>
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa-solid fa-star ${
                      i < props.star ? "fa-color" : "text-white"
                    } me-2`}
                  ></i>
                ))}
                ({props.rating} reviews)
              </p>
            </div>
          </div>
          <div className="card-body text-dark bg-safed">
            <p>{props.content}</p>
            <p className="fw-bold fs-6">Students will achieve:</p>
            <ul className="text-muted fs-7">
              {props.outcome.map((outcome, index) => (
                <li className="my-2" key={index}>
                  {outcome}
                </li>
              ))}
              <li>+ ....</li>
            </ul>
            <Link href="/" passHref>
              <p className="text-capitalize cursor-pointer">
                View Detailed lesson plan
              </p>
            </Link>
          </div>
          <div className="card-footer bg-safed border-0">
            <div className="row">
              <div className="col-6">
                <h3 className="text-lato fw-bold">
                  ₹ {props.discounted_price}
                </h3>
                <p className="text-decoration-line-through">
                  ₹ {props.original_price}
                </p>
              </div>
              <div className="col-6">
                <h5 className="text-lato fw-bold">
                  ₹ 200{" "}
                  <span className="fs-6 text-muted fw-light">per class</span>
                </h5>
              </div>
            </div>
            <p className="text-danger text-center" style={{ fontSize: "13px" }}>
              We&apos;ll schedule the slots as per your convenience
            </p>
          </div>
          <div style={{ fontWeight: "600" }}>
            <div
              className="row d-flex align-items-center justify-content-center text-lato g-0 py-3 text-center"
              style={{ fontSize: "13px", backgroundColor: "#DCCCFF" }}
            >
              <div className="col-4">
                <i class="fa-solid fa-circle-half-stroke fa-lg fa-color me-2"></i>
                8 Activities
              </div>
              <div className="col-4">
                <i class="fa-solid fa-volleyball fa-lg fa-color me-2"></i>
                {props.games} Games
              </div>
              <div className="col-4">
                <i class="fa-solid fa-award fa-lg fa-color me-2"></i>
                {props.certificate} Certificate
              </div>
            </div>
          </div>
          <div className="mx-auto py-4">
            <button className="btn btn-sm btn-orange btn-shrink text-white rounded-pill text-lato px-5 py-2">
              Buy Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
