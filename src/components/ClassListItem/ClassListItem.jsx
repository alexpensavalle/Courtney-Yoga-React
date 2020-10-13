import React from 'react';
// eslint-disable-next-line
import {Link} from 'react-router-dom';
import './ClassListItem.css';

function ClassListItem(props) { 
  return (
    <div yogaClassName='panel panel-default'>
      <div yogaClassName="panel-heading">
        <h3 yogaClassName='panel-title'>{props.yogaClass.name}</h3>
      </div>
      <div yogaClassName='panel-footer ClassListItem-action-panel'>
        <Link
          yogaClassName='btn btn-xs btn-info'
          to={{
            pathname: '/details',
            state: {yogaClass: props.yogaClass}
          }}
        >
          DETAILS
        </Link>
        
        <Link
          yogaClassName='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {yogaClass: props.yogaClass}
          }}
          >
          EDIT
        </Link>

        <button
          yogaClassName="btn btn-xs btn-danger margin-left-10"
          onClick={() => props.handleDeleteClass(props.yogaClass._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
export default ClassListItem;