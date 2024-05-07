import{W as u,r as p,j as e,a as x}from"./app-CyuCcYEt.js";import{T as o,I as l}from"./TextInput-DbfDeh3N.js";import{I as m}from"./InputLabel-k3BOqpYM.js";import{S as c}from"./SingleFormLayout-Dub0Not3.js";function v(){const{data:s,setData:r,post:n,processing:b,errors:t,reset:d}=u({firstname:"",lastname:"",email:"",tel:"",password:"",password_confirmation:""});p.useEffect(()=>()=>{d("password","password_confirmation")},[]);const i=a=>{a.preventDefault(),n(route("attempt-signup"))};return e.jsxs(c,{children:[e.jsx(x,{title:"Register"}),e.jsxs("form",{onSubmit:i,className:"bg-white shadow flex flex-col p-2 m-0 border-2 rounded-xl max-w-[500px] w-min-[250px] w-full",children:[e.jsxs("h2",{className:"font-bold text-3xl mb-8 mx-auto",children:["Sign Up",e.jsx("div",{className:"w-fill h-1 bg-[#d53369] m-auto rounded-b-full"})]}),e.jsx(m,{htmlFor:"firstname",value:"Firstname"}),e.jsx(o,{id:"firstname",name:"firstname",value:s.firstname,className:"p-2 border-2 border-black rounded-lg mb-4",autoComplete:"firstname",isFocused:!0,onChange:a=>r("firstname",a.target.value),required:!0}),e.jsx(l,{message:t.firstname,className:"mt-2"}),e.jsx(m,{htmlFor:"lastname",value:"Lastname"}),e.jsx(o,{id:"lastname",name:"lastname",value:s.lasttname,className:"p-2 border-2 border-black rounded-lg mb-4",autoComplete:"lastname",isFocused:!0,onChange:a=>r("lastname",a.target.value),required:!0}),e.jsx(l,{message:t.lastname,className:"mt-2"}),e.jsx(m,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:s.email,className:"p-2 border-2 border-black rounded-lg mb-4",autoComplete:"username",onChange:a=>r("email",a.target.value),required:!0}),e.jsx(l,{message:t.email,className:"mt-2"}),e.jsx(m,{htmlFor:"tel",value:"Phone Number"}),e.jsx(o,{id:"tel",type:"tel",name:"tel",value:s.tel,className:"p-2 border-2 border-black rounded-lg mb-4",autoComplete:"tel",onChange:a=>r("tel",a.target.value),required:!0}),e.jsx(l,{message:t.tel,className:"mt-2"}),e.jsx(m,{htmlFor:"password",value:"Password"}),e.jsx(o,{id:"password",type:"password",name:"password",value:s.password,className:"p-2 border-2 border-black rounded-lg mb-4",autoComplete:"new-password",onChange:a=>r("password",a.target.value),required:!0}),e.jsx(l,{message:t.password,className:"mt-2"}),e.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(o,{id:"password_confirmation",type:"password",name:"password_confirmation",value:s.password_confirmation,className:"p-2 border-2 border-black rounded-lg mb-4",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value),required:!0}),e.jsx(l,{message:t.password_confirmation,className:"mt-2"}),e.jsxs("div",{className:"flex p-2 gap-4 flex-row-reverse",children:[e.jsx("input",{type:"submit",value:"Sign up",className:"px-4 py-2 rounded-full bg-[#d53369] text-white font-bold hover:bg-transparent hover:text-[#d53369] hover:font-extrabold border-2 border-[#d53369] transition-all duration-200 ease-in-out"}),e.jsx("input",{type:"reset",value:"clear",className:"px-4 py-2 rounded-full  text-white bg-amber-500 font-bold hover:bg-transparent hover:text-amber-500 hover:font-extrabold border-2 border-amber-500 transition-all duration-200 ease-in-out"})]}),e.jsx("div",{className:"flex flex-row-reverse p-2",children:e.jsxs("span",{children:["Already have an account",e.jsx("a",{href:route("login"),className:"underline text-[#d53369]",children:"Login"})]})})]})]})}export{v as default};