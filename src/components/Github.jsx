import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/mwasif666`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <img src={data.avatar_url} alt="" />
      <p>Followers:{data.followers}</p>

    </>
  );
};

export default Github;
