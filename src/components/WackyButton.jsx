import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bounce from "../logic/bounce";

export default function WackyButton(props) {
  const {
    absolute,
    children,
    className,
    image,
    text,
    left,
    onClick,
    path,
    top,
    shouldBounce,
  } = props;

  const [leftState, setLeftState] = useState(left);
  const [topState, setTopState] = useState(top);

  useEffect(() => {
    if (shouldBounce) {
      bounce(leftState, topState, 0, 0, setLeftState, setTopState);
    } else {
      bounce(leftState, topState, left, top, setLeftState, setTopState);
    }
  }, [shouldBounce]);

  return (
    <Link
      className={"wacky-button " + className}
      style={{
        backgroundImage: `url(${image})`,
        left: leftState,
        position: !absolute ? "relative" : "absolute",
        top: topState,
        textDecoration: "none",
      }}
      onClick={onClick}
      to={path}
    >
      {children}
      <p className={className + "-text no-select"}>{text}</p>
    </Link>
  );
}
