import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let a={email:"",message:""};function t(){localStorage.setItem("feedback-form-state",JSON.stringify(a))}function o(){const e=document.querySelector(".feedback-form");e.email.value=a.email,e.message.value=a.message}document.addEventListener("DOMContentLoaded",function(){const e=localStorage.getItem("feedback-form-state");e&&(a=JSON.parse(e),o())});document.querySelector(".feedback-form").addEventListener("input",function(e){e.target.name==="email"?a.email=e.target.value:e.target.name==="message"&&(a.message=e.target.value),t()});document.querySelector(".feedback-form").addEventListener("submit",function(e){!a.email||!a.message?(alert("Please fill in all fields"),e.preventDefault()):(console.log(a),localStorage.removeItem("feedback-form-state"),a={email:"",message:""},e.preventDefault(),document.querySelector(".feedback-form").reset())});
//# sourceMappingURL=commonHelpers2.js.map
