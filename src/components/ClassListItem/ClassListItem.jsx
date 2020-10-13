import React from 'react';
// eslint-disable-next-line
import {Link} from 'react-router-dom';
import './ClassListItem.css';
var moment = require('moment');

function ClassListItem(props) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{moment(props.yogaClass.dateTime).format('DD MMM, YYYY:')}</h3>
        <h3 className='panel-title-bold'>{props.yogaClass.title}</h3><h3 className='panel-title'>with {props.yogaClass.instructor}</h3>
      </div>
      <div className='panel-footer ClassListItem-action-panel'>
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/details',
            state: {yogaClass: props.yogaClass}
          }}
        >
          DETAILS
        </Link>
        
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {yogaClass: props.yogaClass}
          }}
          >
          EDIT
        </Link>

        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => props.handleDeleteClass(props.yogaClass._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
export default ClassListItem;