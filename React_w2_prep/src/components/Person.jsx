import React from "react";
import { useState, useEffect } from "react";

function Person({ personInfo }) {
  console.log(personInfo);

  if (!personInfo) {
    return <div>Still Fetching Data...</div>;
  }

  return (
    <div>
      <h1>Person Info:</h1>
      <p>First Name: {personInfo.firstName} </p>
      <p>Last Name: {personInfo.lastName} </p>
      <p>Email: {personInfo.email}</p>
    </div>
  );
}

export default Person;
