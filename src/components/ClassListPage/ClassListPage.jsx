import React from "react";
import "./ClassListPage.css";
import ClassListItem from "../ClassListItem/ClassListItem";

function ClassListPage(props) {
  return (
    <>
      <img className="book-class-img" src="https://i.imgur.com/OKUSsxW.jpg" />
      <br></br><br></br>
      <div className="ClassListPage-flex">
        {props.yogaClasses/*.sort((a,b) => b.dateTime - a.dateTime)*/.map(yogaClass => (
          <ClassListItem 
            yogaClass={yogaClass} 
            key={yogaClass._id} 
            handleDeleteClass={props.handleDeleteClass}
            handleBookClass={props.handleBookClass}
            handleShowProfile={props.handleShowProfile}
            user={props.user}
            handleSignupOrLogin={props.handleSignupOrLogin}
            />
        ))} 
      </div>
      <div className="margin-bottom"></div>
    </>
  );
}
export default ClassListPage;

