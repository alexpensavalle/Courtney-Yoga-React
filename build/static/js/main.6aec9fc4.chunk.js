(this["webpackJsonpcourtney-yoga-react"]=this["webpackJsonpcourtney-yoga-react"]||[]).push([[0],{25:function(e,a,t){e.exports=t(40)},30:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),s=t.n(l),o=t(5),c=t(1),i=(t(30),t(7)),m=t.n(i),u=t(24),d=t(16),h=t(9),f=t(10),p=t(13),g=t(12);t(32);function E(e){return fetch("/api/yoga",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}function v(e){return fetch("".concat("/api/yoga","/").concat(e._id),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}function C(e){return fetch("".concat("/api/yoga","/").concat(e),{method:"DELETE"}).then((function(e){return e.json()}))}t(33),t(34);var b=function(e){return r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},e.yogaClass.name)),r.a.createElement("div",{className:"panel-footer ClassListItem-action-panel"},r.a.createElement(o.b,{className:"btn btn-xs btn-info",to:{pathname:"/details",state:{yogaClass:e.yogaClass}}},"DETAILS"),r.a.createElement(o.b,{className:"btn btn-xs btn-warning",to:{pathname:"/edit",state:{yogaClass:e.yogaClass}}},"EDIT"),r.a.createElement("button",{className:"btn btn-xs btn-danger margin-left-10",onClick:function(){return e.handleDeleteClass(e.yogaClass._id)}},"DELETE")))};var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Class List"),r.a.createElement("div",{className:"ClassListPage-grid"},e.yogaClasses.map((function(a){return r.a.createElement(b,{yogaClass:a,key:a._id,handleDeleteClass:e.handleDeleteClass})}))))},N=t(11),D=t(14),j=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={invalidForm:!0,formData:{name:"",breed:"Mixed",age:"0"}},e.formRef=r.a.createRef(),e.handleSubmit=function(a){a.preventDefault(),e.props.handleAddClass(e.state.formData)},e.handleChange=function(a){var t=Object(D.a)(Object(D.a)({},e.state.formData),{},Object(N.a)({},a.target.name,a.target.value));e.setState({formData:t,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Add Class"),r.a.createElement("form",{ref:this.formRef,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Name: "),r.a.createElement("input",{className:"form-control",name:"title",value:this.state.formData.title,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date and Time: "),r.a.createElement("input",{className:"form-control",name:"dateTime",value:this.state.formData.dateTime,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Instructor: "),r.a.createElement("input",{className:"form-control",name:"instructor",value:this.state.formData.instructor,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{className:"form-control",name:"description",value:this.state.formData.description,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Size: "),r.a.createElement("input",{className:"form-control",name:"yogaClassSize",value:this.state.formData.yogaClassSize,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Price: "),r.a.createElement("input",{className:"form-control",name:"price",value:this.state.formData.price,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn",disabled:this.state.invalidForm},"ADD CLASS")))}}]),t}(n.Component);var O=function(e){var a=e.yogaClass;return r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},a.name)),r.a.createElement("div",{className:"panel-body"},r.a.createElement("dl",null,r.a.createElement("dt",null,"Breed"),r.a.createElement("dd",null,a.breed),r.a.createElement("dt",null,"Age"),r.a.createElement("dd",null,a.age))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement(o.b,{to:"/"},"RETURN TO LIST")))};var S=function(e){var a=e.location.state.yogaClass;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Class Details"),r.a.createElement(O,{key:a._id,yogaClass:a}))},w=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={invalidForm:!1,formData:e.props.location.state.yogaClass},e.formRef=r.a.createRef(),e.handleSubmit=function(a){a.preventDefault(),e.props.handleUpdateClass(e.state.formData)},e.handleChange=function(a){var t=Object(D.a)(Object(D.a)({},e.state.formData),{},Object(N.a)({},a.target.name,a.target.value));e.setState({formData:t,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Edit Class"),r.a.createElement("form",{ref:this.formRef,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Pup's Name (required)"),r.a.createElement("input",{className:"form-control",name:"name",value:this.state.formData.name,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Pup's Breed (required)"),r.a.createElement("input",{className:"form-control",name:"breed",value:this.state.formData.breed,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Pup's Age"),r.a.createElement("input",{className:"form-control",name:"age",value:this.state.formData.age,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-xs",disabled:this.state.invalidForm},"SAVE PUPPY"),"\xa0\xa0",r.a.createElement(o.b,{to:"/"},"CANCEL")))}}]),t}(n.Component),x=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={yogaClasses:[]},e.handleAddClass=function(){var a=Object(d.a)(m.a.mark((function a(t){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E(t);case 2:n=a.sent,e.setState((function(e){return{yogaClasses:[].concat(Object(u.a)(e.yogaClasses),[n])}}),(function(){return e.props.history.push("/")}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleUpdateClass=function(){var a=Object(d.a)(m.a.mark((function a(t){var n,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(t);case 2:n=a.sent,r=e.state.yogaClasses.map((function(e){return e._id===n._id?n:e})),e.setState({yogaClasses:r},(function(){return e.props.history.push("/")}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleDeleteClass=function(){var a=Object(d.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C(t);case 2:e.setState((function(e){return{yogaClasses:e.yogaClasses.filter((function(e){return e._id!==t}))}}),(function(){return e.props.history.push("/")}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/yoga").then((function(e){return e.json()}));case 2:a=e.sent,this.setState({yogaClasses:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Courtney's Yoga",r.a.createElement("nav",null,r.a.createElement(o.c,{exact:!0,to:"/"},"My Classes"),r.a.createElement(o.c,{exact:!0,to:"/add"},"Add Class"))),r.a.createElement("main",null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{yogaClasses:e.state.yogaClasses,handleDeleteClass:e.handleDeleteClass})}}),r.a.createElement(c.a,{exact:!0,path:"/add",render:function(){return r.a.createElement(j,{handleAddClass:e.handleAddClass})}}),r.a.createElement(c.a,{exact:!0,path:"/details",render:function(e){var a=e.location;return r.a.createElement(S,{location:a})}}),r.a.createElement(c.a,{exact:!0,path:"/edit",render:function(a){var t=a.location;return r.a.createElement(w,{handleUpdateClass:e.handleUpdateClass,location:t})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(o.a,null,r.a.createElement(c.a,{render:function(e){var a=e.history;return r.a.createElement(x,{history:a})}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.6aec9fc4.chunk.js.map