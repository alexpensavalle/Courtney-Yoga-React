import React, {Component} from 'react';

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
         <div className="form-group">
           <label>Class Name: </label>
           <input
             className="form-control"
             name="title"
             value={this.state.formData.title}
             onChange={this.handleChange}
             required
           />
         </div>
         <div className="form-group">
           <label>Date and Time: </label>
           <input
             className="form-control"
             name="dateTime"
             value={this.state.formData.dateTime}
             onChange={this.handleChange}
             required
           />
         </div>
         <div className="form-group">
           <label>Instructor: </label>
           <input
             className="form-control"
             name="instructor"
             value={this.state.formData.instructor}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Description: </label>
           <textarea
             className="form-control"
             name="description"
             value={this.state.formData.description}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Class Size: </label>
           <input
             className="form-control"
             name="yogaClassSize"
             value={this.state.formData.yogaClassSize}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Price: </label>
           <input
             className="form-control"
             name="price"
             value={this.state.formData.price}
             onChange={this.handleChange}
           />
         </div>

         <button
           type="submit"
           className="btn"
           disabled={this.state.invalidForm}
         >
           SAVE CHANGES
         </button>
       </form>
     </>
   );
 }
}
export default EditClassPage;