(this["webpackJsonpcourtney-yoga-react"]=this["webpackJsonpcourtney-yoga-react"]||[]).push([[0],{26:function(e,a,t){e.exports=t(45)},31:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),s=t.n(l),o=t(1),c=t(2),i=(t(31),t(4)),m=t.n(i),u=t(25),d=t(13),h=t(7),p=t(8),f=t(10),g=t(9),E=(t(33),"/api/yogaClasses");function v(e){return fetch("".concat(E,"/").concat(e),{method:"DELETE"}).then((function(e){return e.json()}))}t(34),t(35);var C=t(21);var b=function(e){return r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},C(e.yogaClass.dateTime).format("DD MMM, YYYY:")),r.a.createElement("div",null,r.a.createElement("h3",{className:"panel-title-bold"},e.yogaClass.title),r.a.createElement("h3",{className:"panel-title"},"with ",e.yogaClass.instructor))),r.a.createElement("div",{className:"panel-footer"},e.user&&e.user.isAdmin?r.a.createElement("div",{className:"ClassListItem-action-panel"},r.a.createElement(o.b,{className:"btn btn-xs btn-info",to:{pathname:"/details",state:{yogaClass:e.yogaClass}}},"DETAILS"),r.a.createElement(o.b,{className:"btn btn-xs btn-warning",to:{pathname:"/edit",state:{yogaClass:e.yogaClass}}},"EDIT"),r.a.createElement("button",{className:"btn btn-xs btn-danger margin-left-10",onClick:function(){return e.handleDeleteClass(e.yogaClass._id)}},"DELETE")):r.a.createElement("div",null,r.a.createElement(o.b,{className:"btn btn-xs btn-info centered",to:{pathname:"/details",state:{yogaClass:e.yogaClass}}},"DETAILS"))))};var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Class List"),r.a.createElement("div",{className:"ClassListPage-flex"},e.yogaClasses.map((function(a){return r.a.createElement(b,{yogaClass:a,key:a._id,handleDeleteClass:e.handleDeleteClass,user:e.user})}))))},N=t(12),S=t(15),O=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={invalidForm:!0,formData:{name:"",breed:"Mixed",age:"0"}},e.formRef=r.a.createRef(),e.handleSubmit=function(a){a.preventDefault(),e.props.handleAddClass(e.state.formData)},e.handleChange=function(a){var t=Object(S.a)(Object(S.a)({},e.state.formData),{},Object(N.a)({},a.target.name,a.target.value));e.setState({formData:t,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Add Class"),r.a.createElement("form",{ref:this.formRef,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Name: "),r.a.createElement("input",{className:"form-control",name:"title",value:this.state.formData.title,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date and Time: "),r.a.createElement("input",{className:"form-control",name:"dateTime",value:this.state.formData.dateTime,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Instructor: "),r.a.createElement("input",{className:"form-control",name:"instructor",value:this.state.formData.instructor,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("textarea",{className:"form-control",name:"description",value:this.state.formData.description,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Size: "),r.a.createElement("input",{className:"form-control",name:"yogaClassSize",value:this.state.formData.yogaClassSize,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Price: "),r.a.createElement("input",{className:"form-control",name:"price",value:this.state.formData.price,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn",disabled:this.state.invalidForm},"ADD CLASS")))}}]),t}(n.Component),j=(t(42),t(21));var D=function(e){var a=e.yogaClass;return r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},a.title)),r.a.createElement("div",{className:"panel-body"},r.a.createElement("dl",null,r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Date:\xa0"),r.a.createElement("dd",null,j(a.dateTime).format("DD MMM, YYYY"))),r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Instructor:\xa0"),r.a.createElement("dd",null,a.instructor)),r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Description:\xa0"),r.a.createElement("dd",null,a.description)),r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Class Size:\xa0"),r.a.createElement("dd",null,a.yogaClassSize)),r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Price:\xa0"),r.a.createElement("dd",null,a.price)))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement(o.b,{to:"/"},"RETURN TO LIST"),r.a.createElement(o.b,{to:"/book"},"BOOK CLASS")))};var w=function(e){var a=e.location.state.yogaClass;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Class Details"),r.a.createElement(D,{key:a._id,yogaClass:a}))},k=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={invalidForm:!1,formData:e.props.location.state.yogaClass},e.formRef=r.a.createRef(),e.handleSubmit=function(a){a.preventDefault(),e.props.handleUpdateClass(e.state.formData)},e.handleChange=function(a){var t=Object(S.a)(Object(S.a)({},e.state.formData),{},Object(N.a)({},a.target.name,a.target.value));e.setState({formData:t,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Edit Class"),r.a.createElement("form",{ref:this.formRef,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Name: "),r.a.createElement("input",{className:"form-control",name:"title",value:this.state.formData.title,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date and Time: "),r.a.createElement("input",{className:"form-control",name:"dateTime",value:this.state.formData.dateTime,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Instructor: "),r.a.createElement("input",{className:"form-control",name:"instructor",value:this.state.formData.instructor,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("textarea",{className:"form-control",name:"description",value:this.state.formData.description,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Size: "),r.a.createElement("input",{className:"form-control",name:"yogaClassSize",value:this.state.formData.yogaClassSize,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Price: "),r.a.createElement("input",{className:"form-control",name:"price",value:this.state.formData.price,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn",disabled:this.state.invalidForm},"SAVE CHANGES")))}}]),t}(n.Component);function x(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var T={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:x,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=x();return e?JSON.parse(atob(e.split(".")[1])).user:null}};var L={signup:function(e){return fetch("/api/users/signup",{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer "+T.getToken()},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json()})).then((function(e){var a=e.token;return T.setToken(a)}))},getUser:function(){return T.getUserFromToken()},logout:function(){T.removeToken()},login:function(e){return fetch("/api/users/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var a=e.token;return T.setToken(a)}))}},A=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",password:"",passwordConf:""},e.handleChange=function(a){e.props.updateMessage(""),e.setState(Object(N.a)({},a.target.name,a.target.value))},e.handleSubmit=function(){var a=Object(d.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,L.signup(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e.props.updateMessage(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(p.a)(t,[{key:"isFormInvalid",value:function(){return!(this.state.name&&this.state.email&&this.state.password===this.state.passwordConf)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header-footer"},"Sign Up"),r.a.createElement("br",null),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",value:this.state.name,name:"name",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.password,name:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",value:this.state.passwordConf,name:"passwordConf",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default",disabled:this.isFormInvalid()},"Sign Up"),"\xa0\xa0",r.a.createElement(o.b,{to:"/"},"Cancel")))))}}]),t}(n.Component),I=(t(43),function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=a.call(this,e)).updateMessage=function(e){n.setState({message:e})},n.state={message:""},n}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignupPage"},r.a.createElement(A,Object.assign({},this.props,{updateMessage:this.updateMessage})),r.a.createElement("p",null,this.state.message))}}]),t}(n.Component)),P=(t(44),function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"",pw:""},e.handleChange=function(a){e.setState(Object(N.a)({},a.target.name,a.target.value))},e.handleSubmit=function(){var a=Object(d.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,L.login(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),alert("Invalid Credentials!");case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginPage"},r.a.createElement("header",{className:"header-footer"},"Log In"),r.a.createElement("br",null),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.pw,name:"pw",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default"},"Log In"),"\xa0\xa0\xa0",r.a.createElement(o.b,{to:"/"},"Cancel")))))}}]),t}(n.Component)),U=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;return Object(h.a)(this,t),(e=a.call(this)).handleAddClass=function(){var a=Object(d.a)(m.a.mark((function a(t){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r=t,fetch(E,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()}));case 2:n=a.sent,e.setState((function(e){return{yogaClasses:[].concat(Object(u.a)(e.yogaClasses),[n])}}),(function(){return e.props.history.push("/")}));case 4:case"end":return a.stop()}var r}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleUpdateClass=function(){var a=Object(d.a)(m.a.mark((function a(t){var n,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l=t,fetch("".concat(E,"/").concat(l._id),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(l)}).then((function(e){return e.json()}));case 2:n=a.sent,r=e.state.yogaClasses.map((function(e){return e._id===n._id?n:e})),e.setState({yogaClasses:r},(function(){return e.props.history.push("/")}));case 5:case"end":return a.stop()}var l}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleDeleteClass=function(){var a=Object(d.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(t);case 2:e.setState((function(e){return{yogaClasses:e.yogaClasses.filter((function(e){return e._id!==t}))}}),(function(){return e.props.history.push("/")}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleLogout=function(){L.logout(),e.setState({user:null})},e.handleSignupOrLogin=function(){e.setState({user:L.getUser()})},e.state={yogaClasses:[],user:L.getUser()},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E).then((function(e){return e.json()}));case 2:a=e.sent,this.setState({yogaClasses:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(o.c,{exact:!0,to:"/home"},"Courtney's Yoga"),this.state.user?r.a.createElement("div",null,r.a.createElement("span",{className:"inline"},"Welcome, ",this.state.user.name,"\xa0\xa0|\xa0\xa0\xa0",r.a.createElement("nav",null,r.a.createElement(o.c,{exact:!0,to:"/login",onClick:this.handleLogout},"LOG OUT?")))):r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(o.c,{to:"/login"},"LOG IN"),"\xa0\xa0|\xa0\xa0",r.a.createElement(o.c,{to:"/signup"},"SIGN UP"))),this.state.user&&this.state.user.isAdmin?r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(o.c,{exact:!0,to:"/add"},"Add Class"))):r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(o.c,{exact:!0,to:"/"},"Book a Class"),r.a.createElement(o.c,{exact:!0,to:"/"},"My Profile")))),r.a.createElement("main",null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{yogaClasses:e.state.yogaClasses,handleDeleteClass:e.handleDeleteClass,handleLogout:e.handleLogout,user:e.state.user})}}),r.a.createElement(c.a,{exact:!0,path:"/add",render:function(){return r.a.createElement(O,{handleAddClass:e.handleAddClass})}}),r.a.createElement(c.a,{exact:!0,path:"/details",render:function(e){var a=e.location;return r.a.createElement(w,{location:a})}}),r.a.createElement(c.a,{exact:!0,path:"/edit",render:function(a){var t=a.location;return r.a.createElement(k,{handleUpdateClass:e.handleUpdateClass,location:t})}}),r.a.createElement(c.a,{exact:!0,path:"/login",render:function(a){var t=a.history;return r.a.createElement(P,{history:t,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(c.a,{exact:!0,path:"/signup",render:function(a){var t=a.history;return r.a.createElement(I,{history:t,handleSignupOrLogin:e.handleSignupOrLogin})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(o.a,null,r.a.createElement(c.a,{render:function(e){var a=e.history;return r.a.createElement(U,{history:a})}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.acb89254.chunk.js.map