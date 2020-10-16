  //going to be almost identical to ClassListPage 
  //should I make this a component? It's going to need to inherit props from above and pass them down

import React from "react";
import "./ClassListPage.css";
import ClassListItem from "../ClassListItem/ClassListItem";
function ClassListPage(props) {
  return (
    <>
      <h1>My Classes</h1>
      <div className="ClassListPage-flex">
        {props.yogaClasses/*.sort((a,b) => b.dateTime - a.dateTime)*/.map(yogaClass => (
          <ClassListItem 
            yogaClass={yogaClass} 
            key={yogaClass._id} 
            handleDeleteClass={props.handleDeleteClass}
            user={props.user}
            />
        ))} 
      </div>
    </>
  );
}
export default ClassListPage;

