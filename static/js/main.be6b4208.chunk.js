(this["webpackJsonpsquareboat-frontend"]=this["webpackJsonpsquareboat-frontend"]||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),c=a(26),n=a.n(c),i=(a(67),a(7)),o=a(12),l=a(19),d=a(62),u={baseUrl:"https://jobs-api.squareboat.info/api/v1"},b=a(3),j={isLoggedIn:!1,role:null};var p=function(e){return{type:"set-loggedin-state",payload:e}},h=function(e){return{type:"set-role",payload:e}},m={createdAt:"",email:"",id:"",name:"",skills:"",updatedAt:"",userRole:0,token:""};var O=function(e){return{type:"set-user",payload:e}},x=a(11),f={availableJobs:[],appliedJobs:[]};var v={jobList:[],selectedJob:null};var g={postedJobs:[],candiatesForSelectedJob:[],selectedJobId:""};var w=Object(l.c)({appState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case"set-loggedin-state":return Object(b.a)(Object(b.a)({},e),{},{isLoggedIn:s});case"set-role":return Object(b.a)(Object(b.a)({},e),{},{role:s});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case"reset-user":return Object(b.a)({},m);case"set-user":return Object(b.a)(Object(b.a)({},e),s);default:return e}},job:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case"set-selected-job":return Object(b.a)(Object(b.a)({},e),{},{selectedJob:s});case"set-job-list":return Object(b.a)(Object(b.a)({},e),{},{jobList:s});case"add-new-in-job-list":return Object(b.a)(Object(b.a)({},e),{},{jobList:[].concat(Object(x.a)(e.jobList),Object(x.a)(s))});case"clear-job-list":return Object(b.a)(Object(b.a)({},e),{},{jobList:[]});default:return e}},recuiter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case"add-new-posted-job":return Object(b.a)(Object(b.a)({},e),{},{postedJobs:[].concat(Object(x.a)(e.postedJobs),[s])});case"set-posted-job-list":return Object(b.a)(Object(b.a)({},e),{},{postedJobs:Object(x.a)(s)});case"set-candidate-list":return Object(b.a)(Object(b.a)({},e),{},{candiatesForSelectedJob:s});case"set-selected-job-id":return Object(b.a)(Object(b.a)({},e),{},{selectedJobId:s});default:return e}},candidate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case"set-job-list":return Object(b.a)(Object(b.a)({},e),{},{availableJobs:s});case"add-new-in-job-list":return Object(b.a)(Object(b.a)({},e),{},{availableJobs:[].concat(Object(x.a)(e.availableJobs),Object(x.a)(s))});case"clear-job-list":return Object(b.a)(Object(b.a)({},e),{},{availableJobs:[]});case"set-applied-job-list":return Object(b.a)(Object(b.a)({},e),{},{appliedJobs:s});default:return e}}}),y=Object(l.d)(w,Object(l.a)(d.a.withExtraArgument({endPointBase:u.baseUrl})));y.subscribe((function(){}));var N=y,k=a(5),P={home:"/",dashboard:"/dashboard",login:"/login",register:"/register",forgetPassword:"/forget-password",resetPassword:"/reset-password",postAJob:"/post-a-job",appliedJobs:"/applied-jobs"},J=a(8),S=a(0),M=function(){var e=Object(k.h)().pathname;return Object(S.jsxs)("div",{className:"flex flex-row text-white text-xs font-normal py-4 ",children:[Object(S.jsx)(o.b,{to:P.dashboard,className:"mr-2 hover:underline",children:"Home"}),e===P.postAJob&&Object(S.jsxs)("span",{className:"mr-2",children:[">  ",Object(S.jsx)(o.b,{to:P.postAJob,className:"hover:underline",children:"Post a Job"})]}),e===P.appliedJobs&&Object(S.jsxs)("span",{className:"mr-2",children:[">  "," ",Object(S.jsx)(o.b,{to:P.appliedJobs,children:"Applied Jobs"})]})]})},T=a(38),C=a.n(T),E=function(e){var t=e.data,a=t.title,s=t.description,r=t.location,c=t.id,n=e.role,i=e.onClick;return Object(S.jsxs)("div",{className:C.a.cardShadow,children:[Object(S.jsx)("h3",{className:C.a.title,children:a}),Object(S.jsxs)("p",{className:"p-0 m-0 secondary pb-4 text-sm mb-2 flex-1 overflow-clip overflow-hidden",children:[s," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus odit modi, facilis vel hic tenetur ipsa vero itaque sunt culpa earum commodi deleniti veniam fugit adipisci neque fugiat impedit. Ipsam?"]}),Object(S.jsxs)("div",{className:"flex flex-row items-center justify-start",children:[Object(S.jsx)("p",{className:"p-0 m-0 secondary  text-sm flex-1 font-normal",children:r}),"recruiter"===n&&i&&c&&Object(S.jsx)("button",{onClick:i.bind({},c),className:"light-highlighted-button",children:"View Application"}),"candidate"===n&&i&&c&&Object(S.jsx)("button",{onClick:i.bind({},c),className:"light-highlighted-button",children:"Apply"})]})]})},V=function(e){var t=e.str;return Object(S.jsx)("div",{className:"mx-2 uppercase bg-blue-300 focus:outline-none rounded-full w-12 h-12 min-w-max flex items-center justify-center",children:t[0]})},L=(a(78),function(){var e=Object(k.g)(),t=Object(k.h)().pathname,a=Object(i.b)(),s=t===P.login||t===P.register||t===P.forgetPassword||t===P.resetPassword,r=Object(i.c)((function(e){return e.appState})),c=r.isLoggedIn,n=r.role,l=Object(i.c)((function(e){return e.user})).name;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"flex h-20 py-0 items-stretch justify-between w-full",children:[Object(S.jsxs)("h2",{className:"header-title",children:[Object(S.jsx)("span",{className:"text-white",children:"My"}),Object(S.jsx)("span",{className:"primary",children:"Jobs"})]}),c?Object(S.jsxs)("div",{className:"flex",children:["recruiter"===n&&Object(S.jsx)(o.c,{activeClassName:"border-blue-400",to:P.postAJob,className:"secondary  mx-4 px-3 border-transparent border-b-2 flex items-center justify-center",children:Object(S.jsx)("p",{className:"p-0 m-0 text-white font-normal",children:"Post a Job"})}),"candidate"===n&&Object(S.jsx)(o.c,{activeClassName:"border-blue-400",to:P.appliedJobs,className:"secondary  mx-4 px-3 border-transparent border-b-2 flex items-center justify-center",children:Object(S.jsx)("p",{className:"p-0 m-0 text-white font-normal",children:"Applied Jobs"})}),Object(S.jsxs)("button",{onClick:function(){a({type:"reset-user",payload:null}),a(p(!1)),e.push(P.login)},className:"flex items-center",children:[Object(S.jsx)(V,{str:l}),Object(S.jsx)("div",{className:"border-8 border-transparent mt-3",style:{borderTopColor:"white"}})]})]}):!s&&Object(S.jsx)("div",{className:"flex py-3 justify-center items-center",children:Object(S.jsx)("button",{className:"inset-button p-10",onClick:function(){return e.push(P.login)},children:Object(S.jsx)("p",{children:"Login/Signup"})})})]}),Object(S.jsx)("div",{className:"bg-white h-px opacity-30"})]})}),A=(a(79),function(e){var t=e.children,a=e.high,s=void 0===a||a;return Object(S.jsxs)("div",{className:"min-h-screen w-screen relative p-0 base z-0",children:[Object(S.jsx)("div",{className:"w-screen base-layer absolute left-0 top-0 z-0 shadow-sm",style:{height:s?"46%":210}}),Object(S.jsxs)("div",{className:"max-w-7xl h-full z-0 relative m-auto",children:[Object(S.jsx)(L,{}),Object(S.jsx)("div",{className:"fixed-box",children:t})]})]})}),I=function(e){var t=e.title,a=e.type,s=void 0===a?"dark":a;return Object(S.jsx)("h4",{className:"capitalize font-semibold text-2xl my-3 ".concat("dark"===s?"secondary":""," ").concat("light"===s?"text-white":""),children:t})},F=a(4),B=a.n(F),R=a(9),z=a(10),q=a.n(z),_={login:"/auth/login",changePassword:"/auth/resetpassword",register:"/auth/register",resetPassword:"/auth/resetpassword",verifyResetToken:"/auth/resetpassword"},H={create:"/jobs",delete:"/jobs",fetchAll:"/jobs",fetchOne:"/jobs"},D={alreadyAppliedJobs:"/candidates/jobs/applied",apply:"/candidates/jobs",getAvailableJobs:"//candidates/jobs"},U={postedJobs:"/recruiters/jobs",getCandidates:"/recruiters/jobs"};var W=function(){return function(){var e=Object(R.a)(B.a.mark((function e(t,a,s){var r,c,n,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.endPointBase,c=a().user.token,e.next=4,q.a.get("".concat(r).concat(D.alreadyAppliedJobs),{headers:{Authorization:c}});case 4:if(n=e.sent,(i=n.data).success&&i.data){e.next=8;break}throw new Error(i.message);case 8:return t({type:"set-applied-job-list",payload:i.data}),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()},G=function(){var e=Object(i.c)((function(e){return e.appState})),t=e.isLoggedIn,a=e.role,r=Object(i.c)((function(e){return e.candidate})).appliedJobs,c=Object(s.useState)(!1),n=Object(J.a)(c,2),o=n[0],l=n[1],d=Object(i.b)();return Object(s.useEffect)((function(){l(!0),"candidate"===a&&d(W()).then((function(e){l(!1)})).catch((function(e){alert(e.message),l(!1)}))}),[d,a]),"candidate"===a&&t?Object(S.jsxs)(A,{children:[Object(S.jsx)(M,{}),Object(S.jsx)(I,{type:"light",title:"Jobs posted by you"}),o?Object(S.jsx)(I,{type:"dark",title:"Loading..."}):r.length>0?Object(S.jsx)("div",{className:"grid grid-flow-row grid-cols-4 grid-rows-3 gap-10 place-items-stretch items-stretch ",children:r.map((function(e,t){return Object(S.jsx)(E,{role:"candidate",data:e},t)}))}):Object(S.jsx)(I,{type:"light",title:"No Posted Jobs"})]}):Object(S.jsx)(k.a,{to:"/"})},K=a(28),X=a.n(K),Y=function(e){var t=e.data,a=t.name,s=t.email,r=t.skills;return Object(S.jsxs)("div",{className:"bg-white rounded-md p-3",style:{borderColor:"#303F6080",borderWidth:1},children:[Object(S.jsxs)("div",{className:"flex flex-row mb-6",children:[Object(S.jsx)("div",{children:Object(S.jsx)(V,{str:a})}),Object(S.jsxs)("div",{className:"flex-1 flex flex-col items-stretch justify-start",children:[Object(S.jsx)("p",{className:"flex-1 secondary font-bold",children:a}),Object(S.jsx)("p",{className:"flex-1 w-full secondary ",children:s})]})]}),Object(S.jsx)("p",{className:"p-0 m-0 secondary font-semibold text-xs",children:"Skills"}),Object(S.jsx)("p",{className:"p-0 m-0 secondary pb-4 text-sm ",children:r})]})};var Q=function(){return function(){var e=Object(R.a)(B.a.mark((function e(t,a,s){var r,c,n,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.endPointBase,c=a().user.token,e.next=4,q.a.get("".concat(r).concat(D.getAvailableJobs,"/"),{headers:{Authorization:c}});case 4:if(n=e.sent,(i=n.data).success&&i.data){e.next=8;break}throw new Error(i.message);case 8:return t({type:"set-job-list",payload:i.data}),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()};var Z=function(e){var t=e.jobId;return function(){var e=Object(R.a)(B.a.mark((function e(a,s,r){var c,n,i,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.endPointBase,n=s().user.token,e.next=4,q.a.post("".concat(c).concat(D.apply,"/"),{jobId:t},{headers:{Authorization:n}});case 4:if(i=e.sent,(o=i.data).success){e.next=8;break}throw new Error(o.message);case 8:return a(Q()),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()};var $=function(){return function(){var e=Object(R.a)(B.a.mark((function e(t,a,s){var r,c,n,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.endPointBase,c=a().user.token,e.next=4,q.a.get("".concat(r).concat(U.postedJobs),{headers:{Authorization:c}});case 4:if(n=e.sent,(i=n.data).success){e.next=8;break}throw new Error(i.message);case 8:return t({type:"set-posted-job-list",payload:i.data?i.data.data:[]}),e.abrupt("return",i.data?i.data.data:[]);case 10:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()};var ee=function(e){var t=e.jobId;return function(){var e=Object(R.a)(B.a.mark((function e(a,s,r){var c,n,i,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.endPointBase,n=s().user.token,e.next=4,q.a.get("".concat(c).concat(U.getCandidates,"/").concat(t,"/candidates"),{headers:{Authorization:n}});case 4:if(i=e.sent,(o=i.data).success&&o.data){e.next=8;break}throw new Error(o.message);case 8:return a({type:"set-candidate-list",payload:o.data}),e.abrupt("return",o.data);case 10:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()},te=function(){var e=Object(i.c)((function(e){return e.appState})),t=e.isLoggedIn,a=e.role,r=Object(i.c)((function(e){return e.recuiter})),c=r.postedJobs,n=r.candiatesForSelectedJob,o=Object(i.c)((function(e){return e.candidate})).availableJobs,l=Object(s.useState)(!1),d=Object(J.a)(l,2)[1],u=Object(i.b)(),b=Object(s.useState)(""),j=Object(J.a)(b,2),p=j[0],h=j[1];return Object(s.useEffect)((function(){d(!0),"recruiter"===a?u($()).catch((function(e){return alert(e.message)})):"candidate"===a&&u(Q()).catch((function(e){return alert(e.message)}))}),[u,a]),a&&t?"recruiter"===a?Object(S.jsxs)(A,{high:!1,children:[Object(S.jsx)(M,{}),Object(S.jsx)(I,{type:"light",title:"Jobs posted by you"}),c.length>0?Object(S.jsx)("div",{className:"grid grid-flow-row grid-cols-4 grid-rows-3 gap-10 place-items-stretch items-stretch ",children:X.a.map([].concat(Object(x.a)(c),Object(x.a)(c),Object(x.a)(c),Object(x.a)(c),Object(x.a)(c)),(function(e,t){return Object(S.jsx)(E,{role:"recruiter",data:e,onClick:function(e){h(e),u(ee({jobId:e})).catch((function(e){return alert(e.message)}))}},t)}))}):Object(S.jsx)(I,{title:"No Posted Jobs"}),p&&Object(S.jsx)("div",{className:"w-screen fixed h-screen top-0 left-0 flex items-center justify-center z-10 bg-opacity-60 bg-black",children:Object(S.jsxs)("div",{className:"max-w-2xl w-full rounded-2xl p-8 bg-white  ",children:[Object(S.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[Object(S.jsx)("h4",{className:"capitalize font-semibold text-xl",children:"Applicants for this job"}),Object(S.jsx)("button",{onClick:function(){return h("")},children:"X"})]}),Object(S.jsx)("div",{className:"divide-x-8 divide-black divide-double"}),Object(S.jsx)("div",{className:"my-3.5 bg-gray-300 p-2 max-h-80 grid grid-cols-2 gap-5 rounded-md overflow-y-auto",children:n.map((function(e,t){return Object(S.jsx)(Y,{data:e},t)}))})]})})]}):"candidate"===a?Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(A,{children:[Object(S.jsx)(M,{}),Object(S.jsx)(I,{type:"light",title:"Jobs applied by you"}),o.length>0?Object(S.jsx)("div",{className:"grid grid-flow-row grid-cols-4 grid-rows-3 gap-10 place-items-stretch items-stretch ",children:X.a.map(X.a.take(o,12),(function(e,t){return Object(S.jsx)(E,{role:"candidate",data:e,onClick:function(e){u(Z({jobId:e})).catch((function(e){return alert(e.message)}))}},t)}))}):Object(S.jsx)(I,{title:"No Posted Jobs"})]})}):Object(S.jsx)("p",{children:"OOPS"}):Object(S.jsx)(k.a,{to:"/"})},ae=function(e){var t=e.value,a=e.onChange,s=e.label,r=e.placeholder,c=e.isTouched,n=(e.isValid,e.errorMessage),i=e.type,o=void 0===i?"text":i,l=e.extra,d=void 0===l?null:l;return Object(S.jsxs)("div",{className:"py-3 w-full m-1",children:[Object(S.jsxs)("label",{children:[Object(S.jsxs)("div",{className:"flex justify-between",children:[Object(S.jsx)("p",{className:"m-0 p-0 text-base secondary",children:s}),d]}),Object(S.jsx)("input",{style:{borderWidth:1},className:"".concat(c&&n?"border-red-400":"border-gray-400 focus:border-blue-400"," rounded-sm w-full max-h-12 p-1 border-solid focus:outline-none"),value:t,type:o,placeholder:r,onChange:function(e){return a(e.target.value)}})]}),n&&Object(S.jsxs)("span",{className:"text-red-500 text-xs",children:[" ",n]})]})};var se=function(e){var t=e.email;return function(){var e=Object(R.a)(B.a.mark((function e(a,s,r){var c,n,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.endPointBase,e.next=3,q.a.get("".concat(c).concat(_.resetPassword),{params:{email:t}});case 3:if(n=e.sent,(i=n.data).success&&i.data){e.next=7;break}throw new Error(i.message);case 7:return e.abrupt("return",i.data);case 8:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()},re=a(21),ce=a.n(re),ne=function(){var e=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return ce.a.isEmail(e)?"":"Please enter a valid email"}}),t=Object(J.a)(e,2),a=t[0],r=t[1],c=Object(s.useCallback)((function(e,t){return{value:e.value,onChange:function(a){var s=e.validator(a);t((function(e){return Object(b.a)(Object(b.a)({},e),{},{value:a,errorMessage:s,isValid:!!s,isTouched:!0})}))},isTouched:e.isTouched,isValid:e.isValid,errorMessage:e.errorMessage}}),[]),n=Object(i.b)(),l=Object(k.g)();return Object(S.jsx)(A,{children:Object(S.jsx)("div",{className:"w-full flex py-60 justify-center items-center",children:Object(S.jsxs)("div",{className:"max-w-xl w-full rounded-2xl p-8 bg-white shadow",children:[Object(S.jsx)(I,{type:"dark",title:"Forgot your password?"}),Object(S.jsx)("div",{className:"my-3.5"}),Object(S.jsx)("p",{className:"m-0 p-0 text-sm secondary",children:"Enter the email associated with your account and we\u2019ll send you instructions to reset your password."}),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Email Address*"},c(a,r)),{},{placeholder:"Enter your email",type:"text"})),Object(S.jsx)("button",{className:"primary-button",onClick:function(){return!a.validator(a.value)&&n(se({email:a.value})).then((function(e){l.push(P.resetPassword+"/"+e.token)})).catch((function(e){return alert(e.message)}))},children:"Submit"}),Object(S.jsxs)("p",{children:["Have an account?",Object(S.jsx)(o.b,{to:P.login,className:"primary",children:"Login"})]})]})})})},ie=a.p+"static/media/girl-using-laptop.e3d204c2.png",oe=function(e){var t=e.title,a=e.content;return Object(S.jsxs)("div",{className:"rounded-md px-5 shadow-lg bg-white my-5 max-w-xs",children:[Object(S.jsx)("h3",{className:"primary text-2xl font-medium my-4",children:t}),Object(S.jsx)("p",{className:"p-0 m-0 secondary pb-7 text-sm",children:a})]})},le=function(){return Object(S.jsx)(A,{children:Object(S.jsxs)("article",{className:"px-28",children:[Object(S.jsxs)("section",{className:"flex items-center justify-between my-14",children:[Object(S.jsxs)("div",{className:"flex-1 ",children:[Object(S.jsxs)("h1",{className:"font-medium my-5 text-white text-6xl",children:[Object(S.jsx)("span",{children:"Welcome to My"}),Object(S.jsx)("span",{className:"primary",children:"Jobs"})]}),Object(S.jsx)("button",{className:"primary-button",children:"Get Started"})]}),Object(S.jsx)("div",{className:"max-w-2xl max-h-96 overflow-hidden rounded-2xl shadow-md",children:Object(S.jsx)("img",{className:"w-full h-full",src:ie,alt:"girl-using-laptop"})})]}),Object(S.jsxs)("section",{className:"mb-12",children:[Object(S.jsx)("div",{children:Object(S.jsx)(I,{title:"why us"})}),Object(S.jsx)("div",{className:"flex flex-row flex-wrap justify-between",children:[{title:"Get more visibility",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},{title:"Organize your candidates",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"Verify their abilities",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}].map((function(e,t){return Object(s.createElement)(oe,Object(b.a)(Object(b.a)({},e),{},{key:t}))}))})]}),Object(S.jsxs)("section",{children:[Object(S.jsx)("div",{children:Object(S.jsx)(I,{title:"companies who trust us"})}),Object(S.jsx)("div",{})]})]})})};var de=function(e){var t=e.email,a=e.password;return function(){var e=Object(R.a)(B.a.mark((function e(s,r,c){var n,i,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.endPointBase,e.next=3,q.a.post("".concat(n).concat(_.login),{email:t,password:a});case 3:if(i=e.sent,(o=i.data).success&&o.data){e.next=7;break}throw new Error(o.message);case 7:return e.next=9,Promise.all([s(O(o.data)),s(p(!0)),s(h(1===o.data.userRole?"candidate":0===o.data.userRole?"recruiter":null))]);case 9:return e.abrupt("return",o.data);case 10:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()},ue=function(){var e=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return ce.a.isEmail(e)?"":"Please enter a valid email"}}),t=Object(J.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)({value:"",isTouched:!1,errorMessage:"",isValid:!0,validator:function(e){return e.length>0?"":"This field is mandatory"}}),n=Object(J.a)(c,2),l=n[0],d=n[1],u=Object(s.useState)(!1),j=Object(J.a)(u,2),p=j[0],h=j[1],m=Object(k.g)(),O=Object(i.b)(),x=Object(s.useCallback)((function(){a.validator(a.value)||l.validator(l.value)||(h(!0),O(de({email:a.value,password:l.value})).then((function(){m.push(P.dashboard)})).catch((function(e){alert(e.message),h(!1)})))}),[a,l,O,m]);return Object(S.jsx)(A,{children:Object(S.jsx)("div",{className:"w-full flex py-60 justify-center items-center",children:Object(S.jsx)("div",{className:"max-w-xl w-full rounded-2xl p-8 bg-white popup ",children:p?Object(S.jsx)("p",{children:"Loading"}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(I,{title:"Login"}),Object(S.jsx)("div",{className:"my-3.5"}),Object(S.jsx)(ae,{label:"Email address",value:a.value,onChange:function(e){var t=a.validator(e);r((function(a){return Object(b.a)(Object(b.a)({},a),{},{value:e,errorMessage:t,isValid:!!t,isTouched:!0})}))},isTouched:a.isTouched,isValid:a.isValid,errorMessage:a.errorMessage,placeholder:"Enter your Email",type:"text"}),Object(S.jsx)(ae,{isTouched:l.isTouched,label:"Password",extra:Object(S.jsx)(o.b,{className:"text-xs text-blue-500",to:P.forgetPassword,children:"Forgot Password"}),value:l.value,onChange:function(e){var t=l.validator(e);d((function(a){return Object(b.a)(Object(b.a)({},a),{},{value:e,errorMessage:t,isValid:!!t,isTouched:!0})}))},isValid:l.isValid,errorMessage:l.errorMessage,placeholder:"Enter your Password",type:"password"}),Object(S.jsx)("button",{className:"primary-button",onClick:x,children:"Login"}),Object(S.jsxs)("p",{children:["New to My Jobs?",Object(S.jsx)(o.b,{to:P.register,className:"primary",children:"Create an account"})]})]})})})})};var be=function(e){var t=e.description,a=e.location,s=e.title;return function(){var e=Object(R.a)(B.a.mark((function e(r,c,n){var i,o,l,d;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.endPointBase,o=c().user.token,e.next=4,q.a.post("".concat(i).concat(H.create),{title:s,description:t,location:a},{headers:{Authorization:o}});case 4:if(l=e.sent,(d=l.data).success){e.next=8;break}throw new Error(d.message);case 8:return e.next=10,r($());case 10:return e.abrupt("return",d);case 11:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()},je=function(){var e=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return e.length>0?"":"Is mandatory"}}),t=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return e.length>0?"":"Is mandatory"}}),a=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return e.length>0?"":"Is mandatory"}}),r=Object(s.useState)(!1),c=Object(J.a)(r,2),n=c[0],o=c[1],l=Object(k.g)(),d=Object(i.b)(),u=Object(s.useCallback)((function(){e[0].validator(e[0].value)||t[0].validator(t[0].value)||a[0].validator(a[0].value)||(o(!0),d(be({title:e[0].value,description:t[0].value,location:a[0].value})).then((function(e){l.push(P.dashboard)})).catch((function(e){alert(e.message),o(!1)})))}),[d,t,e,l,a]),j=Object(s.useCallback)((function(e,t){return{value:e.value,onChange:function(a){var s=e.validator(a);t((function(e){return Object(b.a)(Object(b.a)({},e),{},{value:a,errorMessage:s,isValid:!!s,isTouched:!0})}))},isTouched:e.isTouched,isValid:e.isValid,errorMessage:e.errorMessage}}),[]);return Object(S.jsx)(A,{children:Object(S.jsxs)("div",{className:"h-full w-full flex flex-col items-stretch justify-center",children:[Object(S.jsx)(M,{}),Object(S.jsx)("div",{className:"flex justify-center items-center flex-1",children:Object(S.jsx)("div",{className:"max-w-xl w-full rounded-2xl p-8 bg-white popup",children:n?Object(S.jsx)("p",{children:"Loading"}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(I,{title:"Post a Job"}),Object(S.jsx)("div",{className:"my-3.5"}),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Job Title"},j.apply(void 0,Object(x.a)(e))),{},{placeholder:"Job Title",type:"text"})),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Description*"},j.apply(void 0,Object(x.a)(t))),{},{placeholder:"Description",type:"text"})),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Location*"},j.apply(void 0,Object(x.a)(a))),{},{placeholder:"Location",type:"text"})),Object(S.jsx)("button",{className:"primary-button",onClick:u,children:"Post"})]})})})]})})};var pe=function(e){var t=e.email,a=e.password,s=e.confirmPassword,r=e.name,c=e.skills,n=e.userRole;return function(){var e=Object(R.a)(B.a.mark((function e(i,o,l){var d,u,b;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=l.endPointBase,0===n||1===n){e.next=3;break}throw new Error("Invalid User Role");case 3:return e.next=5,q.a.post("".concat(d).concat(_.register),{name:r,email:t,password:a,confirmPassword:s,skills:c,userRole:n});case 5:if(u=e.sent,(b=u.data).success&&b.data){e.next=9;break}throw new Error(b.message);case 9:return e.next=11,Promise.all([i(O(b.data)),i(p(!0)),i(h(1===b.data.userRole?"candidate":0===b.data.userRole?"recruiter":null))]);case 11:return e.abrupt("return",b.data);case 12:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()},he=function(){var e=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return ce.a.isEmail(e)?"":"Please enter a valid email"}}),t=Object(J.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return e.length>0?"":"Is mandatory"}}),n=Object(J.a)(c,2),l=n[0],d=n[1],u=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return e.length>0?"":"Is mandatory"}}),j=Object(J.a)(u,2),p=j[0],h=j[1],m=Object(s.useState)(0),O=Object(J.a)(m,2),x=O[0],f=O[1],v=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return e.length>0?"":"Must be Same as Password"}}),g=Object(J.a)(v,2),w=g[0],y=g[1],N=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return e.length>0?"":"Is mandatory"}}),M=Object(J.a)(N,2),T=M[0],C=M[1],E=Object(s.useState)(!1),V=Object(J.a)(E,2),L=V[0],F=V[1],B=Object(k.g)(),R=Object(i.b)(),z=Object(s.useCallback)((function(e,t){return{value:e.value,onChange:function(a){var s=e.validator(a);t((function(e){return Object(b.a)(Object(b.a)({},e),{},{value:a,errorMessage:s,isValid:!!s,isTouched:!0})}))},isTouched:e.isTouched,isValid:e.isValid,errorMessage:e.errorMessage}}),[]);return Object(S.jsx)(A,{children:Object(S.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:Object(S.jsx)("div",{className:"max-w-xl w-full rounded-2xl p-8 bg-white popup  flex flex-col items-stretch",children:L?Object(S.jsx)("p",{children:"Loading"}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(I,{title:"Signup"}),Object(S.jsx)("div",{className:"py-3 w-full",children:Object(S.jsxs)("label",{children:[Object(S.jsx)("p",{className:"m-0 p-0 text-sm secondary",children:"I'm a*"}),Object(S.jsx)("button",{className:0===x?"primary-button mr-5 w-40":"mr-5 border-blue-300 border-2 w-40  rounded-md p-3 bg-blue-100 secondary",onClick:f.bind({},0),children:"Recruiter"}),Object(S.jsx)("button",{className:1===x?"primary-button mr-5 w-40":"mr-5 border-blue-300 border-2 w-40  rounded-md p-3 bg-blue-100 secondary",onClick:f.bind({},1),children:"Candidate"})]})}),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Full Name*"},z(l,d)),{},{placeholder:"Enter your full name",type:"text"})),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Email Address*"},z(a,r)),{},{placeholder:"Enter your email",type:"text"})),Object(S.jsxs)("div",{className:"flex justify-between items-stretch",children:[Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Password*"},z(p,h)),{},{placeholder:"Enter your email",type:"password"})),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Confirm Password*"},z(w,y)),{},{placeholder:"Enter your email",type:"password"}))]}),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Skills*"},z(T,C)),{},{placeholder:"Enter comma separated skills",type:"text"})),Object(S.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[Object(S.jsx)("button",{className:"primary-button",onClick:function(){a.validator(a.value)||l.validator(l.value)||w.validator(w.value)||p.validator(p.value)||T.validator(T.value)||0!==x&&1!==x||p.value!==w.value?w.value!==p.value&&y((function(e){return Object(b.a)(Object(b.a)({},e),{},{errorMessage:"Must be same as Password ",isTouched:!0,isValid:!1})})):R(pe({confirmPassword:w.value,email:a.value,name:l.value,password:p.value,skills:T.value,userRole:x})).then((function(e){B.push(P.dashboard)})).catch((function(e){alert(e.message),F(!1)}))},children:"Signup"}),Object(S.jsxs)("p",{className:"my-3",children:["Have an account?",Object(S.jsx)(o.b,{to:P.login,className:"primary",children:"Login"})]})]})]})})})})};var me=function(e){var t=e.password,a=e.confirmPassword,s=e.token;return function(){var e=Object(R.a)(B.a.mark((function e(r,c,n){var i,o,l;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.endPointBase,e.next=3,q.a.post("".concat(i).concat(_.changePassword),{password:t,confirmPassword:a,token:s});case 3:if(o=e.sent,(l=o.data).success){e.next=7;break}throw new Error(l.message);case 7:return e.abrupt("return",l.data);case 8:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()};var Oe=function(e){var t=e.token;return function(){var e=Object(R.a)(B.a.mark((function e(a,s,r){var c,n,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.endPointBase,e.next=3,q.a.get("".concat(c).concat(_.verifyResetToken,"/").concat(t));case 3:if(n=e.sent,(i=n.data).success){e.next=7;break}throw new Error(i.message);case 7:return e.abrupt("return",i.data);case 8:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()},xe=function(){var e=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return e.length>0?"":"Is mandatory"}}),t=Object(J.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)({value:"",errorMessage:"",isTouched:!1,isValid:!0,validator:function(e){return e.length>0?"":"Must be Same as Password"}}),n=Object(J.a)(c,2),o=n[0],l=n[1],d=Object(i.b)(),u=Object(k.i)(),j=Object(k.g)(),p=Object(s.useState)(!1),h=Object(J.a)(p,2),m=h[0],O=h[1],x=Object(s.useState)(!1),f=Object(J.a)(x,2),v=f[0],g=f[1];Object(s.useEffect)((function(){d(Oe({token:u.token})).then((function(e){g(!0)})).catch((function(e){alert(e.message),g(!1)})).finally((function(){O(!0)}))}),[u,d]);var w=Object(s.useCallback)((function(e,t){return{value:e.value,onChange:function(a){var s=e.validator(a);t((function(e){return Object(b.a)(Object(b.a)({},e),{},{value:a,errorMessage:s,isValid:!!s,isTouched:!0})}))},isTouched:e.isTouched,isValid:e.isValid,errorMessage:e.errorMessage}}),[]);return m?Object(S.jsx)(A,{children:Object(S.jsx)("div",{className:"w-full flex py-60 justify-center items-center",children:Object(S.jsx)("div",{className:"max-w-xl w-full rounded-2xl p-8 bg-white shadow",children:v?Object(S.jsxs)(S.Fragment,{children:[" ",Object(S.jsx)(I,{title:"Reset Your Password"}),Object(S.jsx)("div",{className:"my-3.5"}),Object(S.jsx)("p",{className:"m-0 p-0 text-sm secondary",children:"Enter your new password below."}),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"New Password"},w(a,r)),{},{placeholder:"Enter your email",type:"password"})),Object(S.jsx)(ae,Object(b.a)(Object(b.a)({label:"Confirm New Password"},w(o,l)),{},{placeholder:"Enter your email",type:"password"})),Object(S.jsx)("button",{className:"primary-button",onClick:function(){o.validator(o.value)||a.validator(a.value)||o.value!==a.value?o.value!==a.value&&l((function(e){return Object(b.a)(Object(b.a)({},e),{},{errorMessage:"Must be same as Password ",isTouched:!0,isValid:!1})})):d(me({confirmPassword:o.value,password:a.value,token:u.token})).then((function(e){j.push(P.login)})).catch((function(e){return alert(e.message)}))},children:"Reset"})]}):Object(S.jsx)(I,{title:"Invalid "})})})}):null},fe=function(){var e=Object(i.c)((function(e){return e.appState})),t=e.isLoggedIn,a=e.role;return Object(S.jsxs)(k.d,{children:[Object(S.jsx)(k.b,{path:P.home,exact:!0,strict:!0,component:le}),t?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.b,{path:P.dashboard,component:te}),"recruiter"===a&&Object(S.jsx)(k.b,{path:P.postAJob,component:je}),"candidate"===a&&Object(S.jsx)(k.b,{path:P.appliedJobs,component:G})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.b,{path:P.login,component:ue}),Object(S.jsx)(k.b,{path:P.register,component:he}),Object(S.jsx)(k.b,{path:P.forgetPassword,component:ne}),Object(S.jsx)(k.b,{path:P.resetPassword+"/:token",component:xe})]})]})};var ve=function(){return Object(S.jsx)(i.a,{store:N,children:Object(S.jsx)(o.a,{children:Object(S.jsx)(fe,{})})})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),r(e),c(e),n(e)}))};n.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(ve,{})}),document.getElementById("root")),ge()},38:function(e,t,a){e.exports={cardShadow:"jobcard_cardShadow__1oHrK",title:"jobcard_title__2y5MB"}},67:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[178,1,2]]]);
//# sourceMappingURL=main.be6b4208.chunk.js.map