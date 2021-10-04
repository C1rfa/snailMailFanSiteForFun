import React from "react";

const InteractiveShadow = ({ style, children }) => {
  const borderRef = React.useRef();
  const leaveIntervalIdRef = React.useRef(null);

  const mouseHandler = (e, action) => {
    const step = 25;

    const xOffset = borderRef.current.offsetLeft;
    const yOffset = borderRef.current.offsetTop;
    const width = borderRef.current.offsetWidth;
    const height = borderRef.current.offsetHeight;

    const currentX = e.clientX - xOffset;
    const currentY = e.clientY - yOffset;

    let newX =
      currentX < width / 2
        ? Math.round(((width / 2 - currentX) / (width / 2)) * step)
        : Math.round(((currentX - width / 2) / (width / 2)) * -step);

    let newY =
      currentY < height / 2
        ? Math.round(((height / 2 - currentY) / (height / 2)) * step)
        : Math.round(((currentY - height / 2) / (height / 2)) * -step);

    switch (action) {
      case "move":
        borderRef.current.style.boxShadow = `${newX}px ${newY}px 20px #03071e`;
        break;
      case "leave":
        leaveIntervalIdRef.current = setInterval(() => {
          newX = newX > 0 ? newX - 1 : newX === 0 ? 0 : newX + 1;
          newY = newY > 0 ? newY - 1 : newY === 0 ? 0 : newY + 1;

          if (newX === newY) {
            clearInterval(leaveIntervalIdRef.current);
            leaveIntervalIdRef.current = null;
          }

          borderRef.current.style.boxShadow = `${newX}px ${newY}px 20px #03071e`;
        }, 10);
        break;
      default:
        break;
    }
  };

  return (
    <div
      onMouseMove={(e) => mouseHandler(e, "move")}
      onMouseLeave={(e) => mouseHandler(e, "leave")}
      ref={borderRef}
      className={style ? style : ""}
    >
      {children}
    </div>
  );
};

export default InteractiveShadow;
