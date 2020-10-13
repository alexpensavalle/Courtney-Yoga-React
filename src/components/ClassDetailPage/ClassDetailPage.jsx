import React from 'react';
import ClassCard from '../../components/ClassCard/ClassCard';
function ClassDetailPage(props) {
 // Refer to ClassListItem to see how yogaClass is being passed via the <Link>
 const yogaClass = props.location.state.yogaClass;
 return (
   <>
     <h1>Class Details</h1>
     <ClassCard
       key={yogaClass._id}
       yogaClass={yogaClass}
     />
   </>
 );
}
export default ClassDetailPage;