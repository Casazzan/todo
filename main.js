!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"dataController",(function(){return h}));var o=(...e)=>{e.length<4&&console.log("Invalid input into todoFactory of "+e);return{name:e[0],date:e[1],notes:e[2],priority:e[3],isComplete:!1,subList:e.slice(4)}};var d=e=>{const t=[];return{name:e,todos:t,addTodo:e=>{t.push(e)},removeTodo:e=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}};const r=(e,t,n=t)=>{const o=document.createElement("option");return o.setAttribute("name",e),o.value=n,o.innerHTML=t,o},c=(e,t,n)=>{const o=document.createElement("input");return o.value=n,o.id=e,o.setAttribute("type",t),o},i=(e,t)=>{const n=document.createElement("label");return n.setAttribute("for",t),n.innerHTML=e,n},l=()=>{const e=document.getElementById("proj").value,t=document.getElementById("name").value,n=document.getElementById("note").value,o=document.getElementById("date").value;console.log("date: ",o);const d=document.getElementById("prior").value,r=[];document.getElementById("task-container").childNodes.forEach(e=>{e.value&&r.push(e.value)}),console.log({projectName:e,name:t,notes:n,date:o,priority:d,subList:r}),s()},a=()=>{const e=document.getElementById("project-input"),t=e.value;t&&(h.addNewProject(t),e.value="")},s=()=>{const e=document.querySelector(".form");for(;e.firstChild;)e.removeChild(e.lastChild);e.parentNode.removeChild(e)},u=()=>{const e=document.getElementById("task-container"),t=document.createElement("input");t.classList.add("sub-task"),t.setAttribute("type","text"),e.prepend(t)},p=(()=>{const e=e=>{const t=e.target.dataset.idx;t?m.openProject(t):console.log("Error: "+e+"has no idx")},t=()=>{const e=document.getElementById("proj-list");for(;e.childNodes.length>2;)e.removeChild(e.firstChild)};return{updateProjectDisplay:()=>{t();const n=document.getElementById("proj-list"),o=document.getElementById("new-proj-container"),d=h.getProjects();for(let t=0;t<d.length;t++){const r=document.createElement("p");r.classList.add("project"),r.dataset.idx=t,r.textContent=d[t].name,r.addEventListener("click",e),n.insertBefore(r,o)}}}})(),m=(()=>{const e=e=>{const r=document.getElementById("todos");r.setAttribute("display","none"),d(),console.log(e),e.forEach(e=>{const d=document.createElement("div");d.classList="todo";const c=document.createElement("div");c.classList="todo-content";const i=document.createElement("div");i.classList="todo-main",i.appendChild(t("title",e.title)),i.appendChild(t("date",e.date)),i.appendChild(t("priority",e.priority)),e.isCompleted&&e.classList.add("complete"),c.appendChild(i);const l=document.createElement("div");l.classList="todo-sub hidden",l.appendChild(t("notes",e.notes)),l.appendChild(t("notes",JSON.stringify(e.subList))),c.appendChild(l),d.appendChild(c),d.appendChild(n()),d.appendChild(o()),r.appendChild(d)}),r.setAttribute("display","")},t=(e,t)=>{const n=document.createElement("p");return n.classList=e,n.textContent=t,n},n=()=>{const e=document.createElement("button");return e.classList.add("edit-btn"),e.textContent="...",e.setAttribute("type","button"),e},o=()=>{const e=document.createElement("button");return e.classList.add("del-btn"),e.textContent="X",e.setAttribute("type","button"),e},d=()=>{const e=document.getElementById("todos");for(;e.hasChildNodes();)e.removeChild(e.lastChild)};return{openProject:t=>{const n=h.getProject(t);document.getElementById("display-proj").textContent=n.name,e(n.todos)}}})(),h=(()=>{const e=[];return{addNewProject:t=>{e.push(d(t)),p.updateProjectDisplay(),m.openProject(e.length-1)},addTodoToProject:(t,n)=>{const o=e.indexOf(t);o>-1&&e[o].addTodo(n)},getProjects:()=>e,addExistingProject:t=>{e.push(t)},getProject:t=>e[t]}})(),y=o("Conquer the world",new Date(2002,1,1),"Be ruler of every country",2,["conquer england","tell england to conquer everyone else"]);const C=d("All Tasks");C.addTodo(y),h.addExistingProject(C),document.getElementById("todo-btn").addEventListener("click",()=>{((e,t,n,o,d,a)=>{const s=document.createElement("div");s.classList.add("todo-form"),s.classList.add("form"),s.appendChild(i("Project","proj"));const p=document.createElement("select");p.id="proj",p.appendChild(r("proj","None"));p.selectedIndex=0,s.appendChild(p),s.appendChild(i("Add Sub Task"),"tasks");const m=document.createElement("div");m.id="task-container";const h=document.createElement("button");h.setAttribute("type","button"),h.innerHTML="+",h.addEventListener("click",u),m.appendChild(h),s.appendChild(m),s.appendChild(i("Todo name","name")),s.appendChild(c("name","text",t)),s.appendChild(i("Notes","note"));const y=document.createElement("textarea");y.id="note",y.setAttribute("rows","4"),y.value=n,s.appendChild(y),s.appendChild(i("Due Date","date")),s.appendChild(c("date","date",o)),s.appendChild(i("Priority","prior"));const C=document.createElement("select");C.id="prior",C.appendChild(r("prior","None",0)),C.appendChild(r("prior","Low",1)),C.appendChild(r("prior","Medium",2)),C.appendChild(r("prior","High",3)),C.selectedIndex=d,s.appendChild(C);const E=document.createElement("button");E.setAttribute("type","submit"),E.classList.add("submit-btn"),E.addEventListener("click",l),E.innerHTML="Submit",s.appendChild(E),document.body.appendChild(s)})(0,"","","",0)}),document.getElementById("project-btn").addEventListener("click",a),document.getElementById("project-input").addEventListener("keydown",e=>{"Enter"===e.key&&a()}),p.updateProjectDisplay()}]);