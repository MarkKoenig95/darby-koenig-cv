import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bounce from "../logic/bounce";

export default function WackyButton(props) {
  const {
    children,
    className,
    image,
    text,
    left,
    onClick,
    path,
    top,
    reverse,
    shouldBounce,
  } = props;

  const leftStart = reverse ? 0 : left;
  const topStart = reverse ? 0 : top;

  const leftTarget = reverse ? left : 0;
  const topTarget = reverse ? top : 0;

  const [leftState, setLeftState] = useState(leftStart);
  const [topState, setTopState] = useState(topStart);

  useEffect(() => {
    if (shouldBounce) {
      bounce(
        leftState,
        topState,
        leftTarget,
        topTarget,
        setLeftState,
        setTopState
      );
    } else {
      bounce(
        leftState,
        topState,
        leftStart,
        topStart,
        setLeftState,
        setTopState
      );
    }
  }, [shouldBounce]);

  return (
    <Link
      className={"wacky-button " + className}
      style={{
        backgroundImage: `url(${image})`,
        left: leftState,
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
