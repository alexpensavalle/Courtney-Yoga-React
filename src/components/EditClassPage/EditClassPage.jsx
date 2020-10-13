import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditClassPage extends Component {
 state = {
   invalidForm: false,
   // Refer to ClassListItem to see how yogaClass is being passed via the <Link>
   formData: this.props.location.state.yogaClass
 };
 formRef = React.createRef();
 handleSubmit = e => {
   e.preventDefault();
   this.props.handleUpdateClass(this.state.formData);
 };
 handleChange = e => {
   const formData = {...this.state.formData, [e.target.name]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };
 render() {
   return (
     <>
       <h1>Edit Class</h1>
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div yogaClassName="form-group">
           <label>Pup's Name (required)</label>
           <input
             yogaClassName="form-control"
             name="name"
             value={this.state.formData.name}
             onChange={this.handleChange}
             required
           />
         </div>
         <div yogaClassName="form-group">
           <label>Pup's Breed (required)</label>
           <input
             yogaClassName="form-control"
             name="breed"
             value={this.state.formData.breed}
             onChange={this.handleChange}
             required
           />
         </div>
         <div yogaClassName="form-group">
           <label>Pup's Age</label>
           <input
             yogaClassName="form-control"
             name="age"
             value={this.state.formData.age}
             onChange={this.handleChange}
           />
         </div>
         <button
           type="submit"
           yogaClassName="btn btn-xs"
           disabled={this.state.invalidForm}
         >
           SAVE PUPPY
         </button>&nbsp;&nbsp;
         <Link to='/'>CANCEL</Link>
       </form>
     </>
   );
 }
}
export default EditClassPage;