(this["webpackJsonpcourtney-yoga-react"]=this["webpackJsonpcourtney-yoga-react"]||[]).push([[0],{21:function(e,a,t){},27:function(e,a,t){e.exports=t(46)},32:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(24),l=t.n(s),o=t(1),c=t(2),i=(t(32),t(3)),m=t.n(i),u=t(26),h=t(12),d=t(7),p=t(8),f=t(10),g=t(9),E=(t(34),"/api/yogaClasses");function v(e){return fetch("".concat(E,"/").concat(e),{method:"DELETE"}).then((function(e){return e.json()}))}function C(e,a){if(e)return fetch("/api/users",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({user:e,classID:a})}).then((function(e){return e.json()}))}function b(e,a){if(e)return console.log("showSelectedClasses"),fetch("/api/users",{method:"GET",headers:{"content-type":"application/json"},body:JSON.stringify({user:e,classID:a})}).then((function(e){return e.json()}))}t(21),t(35);var y=t(22);var N=function(e){return r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},y(e.yogaClass.dateTime).format("DD MMM, YYYY:")),r.a.createElement("div",null,r.a.createElement("h3",{className:"panel-title-bold"},e.yogaClass.title),r.a.createElement("h3",{className:"panel-title"},"with ",e.yogaClass.instructor))),r.a.createElement("div",{className:"panel-footer"},e.user&&e.user.isAdmin?r.a.createElement("div",{className:"ClassListItem-action-panel"},r.a.createElement(o.b,{className:"btn btn-xs btn-info",to:{pathname:"/details",state:{yogaClass:e.yogaClass,user:e.user,handleBookClass:e.handleBookClass,handleShowProfile:e.handleShowProfile,handleSignupOrLogin:e.handleSignupOrLogin}}},"DETAILS"),r.a.createElement(o.b,{className:"btn btn-xs btn-warning",to:{pathname:"/edit",state:{yogaClass:e.yogaClass,user:e.user,handleShowProfile:e.handleShowProfile}}},"EDIT"),r.a.createElement("button",{className:"btn btn-xs btn-danger margin-left-10",onClick:function(){return e.handleDeleteClass(e.yogaClass._id)}},"DELETE")):r.a.createElement("div",null,r.a.createElement(o.b,{className:"btn btn-xs btn-info centered",to:{pathname:"/details",state:{yogaClass:e.yogaClass,user:e.user,handleBookClass:e.handleBookClass,handleShowProfile:e.handleShowProfile}}},"DETAILS"))))};var S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"book-class-img",src:"https://i.imgur.com/OKUSsxW.jpg"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"ClassListPage-flex"},e.yogaClasses.map((function(a){return r.a.createElement(N,{yogaClass:a,key:a._id,handleDeleteClass:e.handleDeleteClass,handleBookClass:e.handleBookClass,handleShowProfile:e.handleShowProfile,user:e.user,handleSignupOrLogin:e.handleSignupOrLogin})}))),r.a.createElement("div",{className:"margin-bottom"}))},O=t(13),k=t(15),w=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={invalidForm:!0,formData:{name:"",breed:"Mixed",age:"0"}},e.formRef=r.a.createRef(),e.handleSubmit=function(a){a.preventDefault(),e.props.handleAddClass(e.state.formData)},e.handleChange=function(a){var t=Object(k.a)(Object(k.a)({},e.state.formData),{},Object(O.a)({},a.target.name,a.target.value));e.setState({formData:t,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Add Class"),r.a.createElement("form",{ref:this.formRef,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Name: "),r.a.createElement("input",{className:"form-control",name:"title",value:this.state.formData.title,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date and Time: "),r.a.createElement("input",{className:"form-control",name:"dateTime",value:this.state.formData.dateTime,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Instructor: "),r.a.createElement("input",{className:"form-control",name:"instructor",value:this.state.formData.instructor,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("textarea",{className:"form-control",name:"description",value:this.state.formData.description,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Size: "),r.a.createElement("input",{className:"form-control",name:"yogaClassSize",value:this.state.formData.yogaClassSize,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Price: "),r.a.createElement("input",{className:"form-control",name:"price",value:this.state.formData.price,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn",disabled:this.state.invalidForm},"ADD CLASS")))}}]),t}(n.Component),j=(t(42),t(22));var D=function(e){var a=e.yogaClass;return e.user,r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},a.title)),r.a.createElement("div",{className:"panel-body"},r.a.createElement("dl",null,r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Date:\xa0"),r.a.createElement("dd",null,j(a.dateTime).format("DD MMM, YYYY"))),r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Instructor:\xa0"),r.a.createElement("dd",null,a.instructor)),r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Description:\xa0"),r.a.createElement("dd",null,a.description)),r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Spots Remaining:\xa0"),r.a.createElement("dd",null,a.yogaClassSize)),r.a.createElement("div",{className:"inline"},r.a.createElement("dt",null,"Price:\xa0"),r.a.createElement("dd",null,a.price)))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement(o.b,{to:"/"},"RETURN TO LIST"),e.user&&e.user.signups.includes(a._id)?r.a.createElement(o.b,{to:"/profile"},"ALREADY BOOKED"):e.user?r.a.createElement("button",{onClick:function(){return e.handleBookClass(a._id)}},"BOOK CLASS"):r.a.createElement(o.b,{to:"/login"},"LOG IN TO BOOK")))};t(43);var x=function(e){var a=e.location.state.yogaClass;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"book-class-img",src:"https://i.imgur.com/OKUSsxW.jpg"}),r.a.createElement("h1",null,"Class Details"),r.a.createElement(D,{key:a._id,yogaClass:a,user:e.user,handleBookClass:e.handleBookClass}),r.a.createElement("div",{className:"margin-bottom"}))},L=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={invalidForm:!1,formData:e.props.location.state.yogaClass},e.formRef=r.a.createRef(),e.handleSubmit=function(a){a.preventDefault(),e.props.handleUpdateClass(e.state.formData)},e.handleChange=function(a){var t=Object(k.a)(Object(k.a)({},e.state.formData),{},Object(O.a)({},a.target.name,a.target.value));e.setState({formData:t,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Edit Class"),r.a.createElement("form",{ref:this.formRef,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Name: "),r.a.createElement("input",{className:"form-control",name:"title",value:this.state.formData.title,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date and Time: "),r.a.createElement("input",{className:"form-control",name:"dateTime",value:this.state.formData.dateTime,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Instructor: "),r.a.createElement("input",{className:"form-control",name:"instructor",value:this.state.formData.instructor,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("textarea",{className:"form-control",name:"description",value:this.state.formData.description,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Class Size: "),r.a.createElement("input",{className:"form-control",name:"yogaClassSize",value:this.state.formData.yogaClassSize,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Price: "),r.a.createElement("input",{className:"form-control",name:"price",value:this.state.formData.price,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn",disabled:this.state.invalidForm},"SAVE CHANGES")))}}]),t}(n.Component);function T(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var P={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:T,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=T();return e?JSON.parse(atob(e.split(".")[1])).user:null}};var A={signup:function(e){return fetch("/api/users/signup",{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer "+P.getToken()},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json()})).then((function(e){var a=e.token;return P.setToken(a)}))},getUser:function(){return P.getUserFromToken()},logout:function(){P.removeToken()},login:function(e){return fetch("/api/users/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var a=e.token;return P.setToken(a)}))}},I=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",password:"",passwordConf:""},e.handleChange=function(a){e.props.updateMessage(""),e.setState(Object(O.a)({},a.target.name,a.target.value))},e.handleSubmit=function(){var a=Object(h.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,A.signup(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e.props.updateMessage(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(p.a)(t,[{key:"isFormInvalid",value:function(){return!(this.state.name&&this.state.email&&this.state.password===this.state.passwordConf)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header-footer"},"Sign Up"),r.a.createElement("br",null),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",value:this.state.name,name:"name",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.password,name:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",value:this.state.passwordConf,name:"passwordConf",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default",disabled:this.isFormInvalid()},"Sign Up"),"\xa0\xa0",r.a.createElement(o.b,{to:"/"},"Cancel")))))}}]),t}(n.Component),B=(t(44),function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).updateMessage=function(e){n.setState({message:e})},n.state={message:""},n}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignupPage"},r.a.createElement(I,Object.assign({},this.props,{updateMessage:this.updateMessage})),r.a.createElement("p",null,this.state.message))}}]),t}(n.Component)),U=(t(45),function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={email:"",pw:""},e.handleChange=function(a){e.setState(Object(O.a)({},a.target.name,a.target.value))},e.handleSubmit=function(){var a=Object(h.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,A.login(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),alert("Invalid Credentials!");case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginPage"},r.a.createElement("header",{className:"header-footer"},"Log In"),r.a.createElement("br",null),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.pw,name:"pw",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default"},"Log In"),"\xa0\xa0\xa0",r.a.createElement(o.b,{to:"/"},"Cancel")))))}}]),t}(n.Component));var F=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"book-class-img",src:"https://i.imgur.com/GUdjg5Z.png"}),r.a.createElement("h1",null,"My Classes (work in progress)"),r.a.createElement("div",{className:"ClassListPage-flex"},e.yogaClasses.map((function(a){return r.a.createElement(N,{yogaClass:a,key:a._id,handleShowProfile:e.handleShowProfile,user:e.user})}))),r.a.createElement("p",null,"Look in props, user, signups...trying to only display classes that a user has signed up for..."),r.a.createElement("div",{className:"margin-bottom"}))},M=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).handleAddClass=function(){var a=Object(h.a)(m.a.mark((function a(t){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r=t,fetch(E,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()}));case 2:n=a.sent,e.setState((function(e){return{yogaClasses:[].concat(Object(u.a)(e.yogaClasses),[n])}}),(function(){return e.props.history.push("/")}));case 4:case"end":return a.stop()}var r}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleUpdateClass=function(){var a=Object(h.a)(m.a.mark((function a(t){var n,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s=t,fetch("".concat(E,"/").concat(s._id),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()}));case 2:n=a.sent,r=e.state.yogaClasses.map((function(e){return e._id===n._id?n:e})),e.setState({yogaClasses:r},(function(){return e.props.history.push("/")}));case 5:case"end":return a.stop()}var s}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleLogout=function(){A.logout(),e.setState({user:null})},e.handleSignupOrLogin=function(){e.setState({user:A.getUser()})},e.handleDeleteClass=function(){var a=Object(h.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(t);case 2:e.setState((function(e){return{yogaClasses:e.yogaClasses.filter((function(e){return e._id!==t}))}}),(function(){return e.props.history.push("/")}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleBookClass=function(){var a=Object(h.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C(e.state.user,t);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleShowProfile=function(){var a=Object(h.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b(e.state.user,t);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.state={yogaClasses:[],user:A.getUser()},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E).then((function(e){return e.json()}));case 2:a=e.sent,this.setState({yogaClasses:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(o.c,{exact:!0,to:"/"},"Courtney's Virtual Yoga Classes "),this.state.user?r.a.createElement("div",null,r.a.createElement("span",{className:"inline"},"Welcome, ",this.state.user.name,"\xa0\xa0|\xa0\xa0\xa0",r.a.createElement("nav",null,r.a.createElement(o.c,{className:"NavLink right",exact:!0,to:"/login",onClick:this.handleLogout},"LOG OUT?")))):r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(o.c,{className:"NavLink btn",to:"/login"},"LOG IN"),"\xa0\xa0|\xa0\xa0",r.a.createElement(o.c,{className:"btn",to:"/signup"},"SIGN UP"))),this.state.user&&this.state.user.isAdmin?r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(o.c,{className:"NavLink right",exact:!0,to:"/"},"Class List"),r.a.createElement(o.c,{className:"NavLink",exact:!0,to:"/add"},"Add Class"))):r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(o.c,{className:"NavLink right",exact:!0,to:"/"},"Book a Class"),r.a.createElement(o.c,{className:"NavLink right",exact:!0,to:"/profile"},"My Profile")))),r.a.createElement("main",null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement(S,{yogaClasses:e.state.yogaClasses,handleDeleteClass:e.handleDeleteClass,handleLogout:e.handleLogout,user:e.state.user})}}),r.a.createElement(c.a,{exact:!0,path:"/add",render:function(){return r.a.createElement(w,{handleAddClass:e.handleAddClass})}}),r.a.createElement(c.a,{exact:!0,path:"/details",render:function(a){var t=a.location;return r.a.createElement(x,{handleBookClass:e.handleBookClass,user:e.state.user,location:t})}}),r.a.createElement(c.a,{exact:!0,path:"/edit",render:function(a){var t=a.location;return r.a.createElement(L,{handleUpdateClass:e.handleUpdateClass,location:t})}}),r.a.createElement(c.a,{exact:!0,path:"/login",render:function(a){var t=a.history;return r.a.createElement(U,{history:t,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(c.a,{exact:!0,path:"/signup",render:function(a){var t=a.history;return r.a.createElement(B,{history:t,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(c.a,{exact:!0,path:"/profile",render:function(a){var t=a.history;return r.a.createElement(F,{history:t,handleShowProfile:e.handleShowProfile,yogaClasses:e.state.yogaClasses,user:e.state.user})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(c.a,{render:function(e){var a=e.history;return r.a.createElement(M,{history:a})}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.9162248e.chunk.js.map