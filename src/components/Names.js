import { React, useState, useEffect } from "react";
import axios from "axios";

const Names = () => {
  const [details, setdetails] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://apifortour.onrender.com/")
    //   .then((response) => {
    //     setdetails(response.data.tours);
    //     console.log(response.data);
    //     console.log(details);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    getTour();
  }, []);

  const getTour = async () => {
    try {
      const response = await axios.get("https://apifortour.onrender.com/");
      const { tours } = response.data;
      setdetails(tours);
    } catch (err) {
      console.log(err);
      throw new Error("There is some error during fetching data");
    }
  };

  return (
    <div>
      <p>Nothing</p>
      {details?.map((data, index) => {
        const { name, difficulty } = data;
        return <h2 key={index}>{data.name}</h2>;
      })}
    </div>
  );
};

export default Names;
