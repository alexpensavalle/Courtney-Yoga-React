import React from 'react';
import {Link} from 'react-router-dom';
import './ClassCard.css';
var moment = require('moment');


function ClassCard(props) { 

  const yogaClass = props.yogaClass;
  const user = props.user;

  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{yogaClass.title}</h3>
      </div>
      <div className='panel-body'>
        <dl>

          <div className='inline' >
            <dt>Date:&nbsp;</dt>
            <dd>{moment(yogaClass.dateTime).format('DD MMM, YYYY')}</dd>
          </div>
          
          <div className='inline' >
            <dt>Instructor:&nbsp;</dt>
            <dd>{yogaClass.instructor}</dd>
          </div>
          
          <div className='inline' >
            <dt>Description:&nbsp;</dt>
            <dd>{yogaClass.description}</dd>
          </div>
          
          <div className='inline' >
            <dt>Spots Remaining:&nbsp;</dt>
            <dd>{yogaClass.yogaClassSize}</dd>
          </div>
          
          <div className='inline' >
            <dt>Price:&nbsp;</dt>
            <dd>{yogaClass.price}</dd>
          </div>

        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
        
        
        {props.user.signups.includes(yogaClass._id) ?
        <Link to='/profile'>ALREADY BOOKED</Link>
        :
        props.user ?
        <button
            onClick={() => props.handleBookClass(yogaClass._id)}
          >
            BOOK CLASS 
        </button> 
        :
        <Link to='/login'>LOG IN TO BOOK</Link>
        }



      </div>
      
    </div>
  );
}
export default ClassCard;