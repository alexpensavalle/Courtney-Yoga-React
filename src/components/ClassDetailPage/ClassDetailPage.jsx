import React from 'react';
import ClassCard from '../../components/ClassCard/ClassCard';
import './ClassDetailPage.css';

function ClassDetailPage(props) {
 
  // Refer to ClassListItem to see how yogaClass is being passed via the <Link>
 const yogaClass = props.location.state.yogaClass;
 return (
   <>
     <img className="book-class-img" src="https://i.imgur.com/OKUSsxW.jpg" />
     <h1>Class Details</h1>
     <ClassCard
       key={yogaClass._id}
       yogaClass={yogaClass}
       user={props.user}
       handleBookClass={props.handleBookClass}
     />
     <div className="margin-bottom"></div>
   </>
 );
}
export default ClassDetailPage;