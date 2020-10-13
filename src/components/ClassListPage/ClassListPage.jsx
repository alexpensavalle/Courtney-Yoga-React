import React from "react";
import "./ClassListPage.css";
import ClassListItem from "../ClassListItem/ClassListItem";
function ClassListPage(props) {
  return (
    <>
      <h1>Class List</h1>
      <div yogaClassName="ClassListPage-grid">
        {props.yogaClasses.map(yogaClass => (
          <ClassListItem 
            yogaClass={yogaClass} 
            key={yogaClass._id} 
            handleDeleteClass={props.handleDeleteClass}
            />
        ))} 
      </div>
    </>
  );
}
export default ClassListPage;