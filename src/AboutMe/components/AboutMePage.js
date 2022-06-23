import Nav from "./Nav";
import DescribeMe from "./DescribeMe";
import InterestsAndHobbies from "./InterestsAndHobbies";
import React, { useState } from 'react'
import Form from "./Form";
import Photos from "./Photos";
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
<Photos/>
    </>
  );
}

export default AboutMePage;
