  //going to be almost identical to ClassListPage 
  //should I make this a component? It's going to need to inherit props from above and pass them down

import React from "react";
import "../ClassListPage/ClassListPage.css";
import ClassListItem from "../ClassListItem/ClassListItem.jsx";

function MyProfilePage(props) {
  return (
    <>
      <img className="book-class-img" src="https://i.imgur.com/GUdjg5Z.png" />
      <h1>My Classes (work in progress)</h1>
      <div className="ClassListPage-flex">
        {props.yogaClasses/*.sort((a,b) => b.dateTime - a.dateTime)*/.map(yogaClass => (
            <ClassListItem 
              yogaClass={yogaClass} 
              key={yogaClass._id} 
              handleShowProfile={props.handleShowProfile}
              user={props.user}
            />
        ))} 
      </div>
      <p>Look in props, user, signups...trying to only display classes that a user has signed up for...</p>
      <div className="margin-bottom"></div>
    </>
  );
}
export default MyProfilePage;

