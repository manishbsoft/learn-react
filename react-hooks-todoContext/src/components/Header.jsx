import React from "react";

const Header = (props) => {
    const {title} = props;
  console.log("header rendered....");
  return (
    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
      {title}
    </h1>
  );
};

export default React.memo(Header);
