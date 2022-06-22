import Nav from "./Nav";
import DescribeMe from "./DescribeMe";
import InterestsAndHobbies from "./InterestsAndHobbies";
import React, { useState } from 'react'
import Form from "./Form";
function AboutMePage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <Nav setShowForm={setShowForm}/>
    {showForm===true&&
    <Form setShowForm={setShowForm} />
    }
<DescribeMe/>
 <InterestsAndHobbies/>
   
   </>
  );
}

export default AboutMePage;
