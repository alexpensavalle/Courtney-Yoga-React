import React from 'react';
import {Link} from 'react-router-dom';

function ClassCard({yogaClass}) { 
  return (
    <div yogaClassName='panel panel-default'>
      <div yogaClassName="panel-heading">
        <h3 yogaClassName='panel-title'>{yogaClass.name}</h3>
      </div>
      <div yogaClassName='panel-body'>
        <dl>
          <dt>Breed</dt>
          <dd>{yogaClass.breed}</dd>
          <dt>Age</dt>
          <dd>{yogaClass.age}</dd>
        </dl>
      </div>
      <div yogaClassName='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}
export default ClassCard;