import React, {Component} from 'react';

class AddClassPage extends Component {
 state = {
   invalidForm: true,
   formData: {
     name: '',
     breed: 'Mixed',
     age: '0'
   }
 };
 
 formRef = React.createRef();
 
 handleSubmit = e => {
   e.preventDefault();
   this.props.handleAddClass(this.state.formData);
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
       <h1>Add Class</h1>
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div yogaClassName="form-group">
           <label>Class Name (required)</label>
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
           yogaClassName="btn"
           disabled={this.state.invalidForm}
         >
           ADD CLASS
         </button>
       </form>
     </>
   );
 }
}
export default AddClassPage;