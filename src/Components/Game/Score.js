import React from "react";

const Score = (props) => {
  const color = React.useMemo(() => {
    if (props.score > 15) return "#FA4357";
    if (props.score > 10) return "#F96575";
    if (props.score > 5) return "#F8959F";
    return "white";
  }, [props]);

  return (
    <div className="score">
      <p>Score:</p>&nbsp;
      <p style={{ color }}>{props.score}</p>
    </div>
  );
};

export default Score;
