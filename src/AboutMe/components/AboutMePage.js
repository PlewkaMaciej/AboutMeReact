import Nav from "./Nav";
import DescribeMe from "./DescribeMe";
import InterestsAndHobbies from "./InterestsAndHobbies";
import React, { useState } from 'react'
import Form from "./Form";
function AboutMePage() {
  const [showForm, setShowForm] = useState(null);
  return (
    <>
      <Nav setShowForm={setShowForm} />
      {showForm   &&
        <Form showForm={showForm} setShowForm={setShowForm} />
      }
      <DescribeMe />
      <InterestsAndHobbies />

    </>
  );
}

export default AboutMePage;
