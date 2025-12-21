import React from "react";
import { useState, useEffect } from "react";
import Person from "./person.jsx";

function PersonContoller() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.randomuser.me/api?results=1")
      .then((response) => response.json())
      .then((data) => {
        const person = data.results[0];
        const personNeededInfo = {
          firstName: person.name.first,
          lastName: person.name.last,
          email: person.email,
        };
        setData(personNeededInfo);
      });
  }, []);

  return <Person personInfo={data} />;
}

export default PersonContoller;
