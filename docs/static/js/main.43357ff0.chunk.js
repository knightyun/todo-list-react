(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(7),i=n.n(s),r=(n(13),n(1)),c=n(2),l=n(5),d=n(3),u=n(4),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={todo:""},o.handleSubmit=o.handleSubmit.bind(Object(l.a)(o)),o.handleChange=o.handleChange.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState((function(e){return{todo:e.todo.trim()}}),(function(){t.state.todo.length>0&&(t.props.onAddTodo(t.state.todo),t.setState({todo:""}))}))}},{key:"handleChange",value:function(e){this.setState({todo:e.target.value})}},{key:"render",value:function(){return a.a.createElement("header",null,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("label",{className:"header-label"},"ToDoList"),a.a.createElement("input",{className:"header-input",type:"text",onChange:this.handleChange,value:this.state.todo,placeholder:"\u6dfb\u52a0 ToDo"})))}}]),n}(a.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement(m,{doingLists:this.props.todoLists,onDelItem:this.props.onDelItem,onExchangeList:this.props.onExchangeList,onRenameTodo:this.props.onRenameTodo}),a.a.createElement(f,{doneLists:this.props.doneLists,onDelItem:this.props.onDelItem,onExchangeList:this.props.onExchangeList,onRenameTodo:this.props.onRenameTodo}))}}]),n}(a.a.Component),m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"doing"},a.a.createElement("div",{className:"doing-head"},a.a.createElement("div",{className:"head-text"},"\u6b63\u5728\u8fdb\u884c"),a.a.createElement("div",{className:"head-num"},this.props.doingLists.length)),a.a.createElement(v,{lists:this.props.doingLists,className:"doing-list",listType:"todoList",onDelItem:this.props.onDelItem,onExchangeList:this.props.onExchangeList,onRenameTodo:this.props.onRenameTodo}))}}]),n}(a.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"done"},a.a.createElement("div",{className:"done-head"},a.a.createElement("div",{className:"head-text"},"\u6b63\u5728\u8fdb\u884c"),a.a.createElement("div",{className:"head-num"},this.props.doneLists.length)),a.a.createElement(v,{lists:this.props.doneLists,className:"done-list",listType:"doneList",onDelItem:this.props.onDelItem,onExchangeList:this.props.onExchangeList,onRenameTodo:this.props.onRenameTodo}))}}]),n}(a.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.lists||[],n=Array.prototype.map.call(t,(function(t,n){return a.a.createElement(g,{item:t,key:n,listType:e.props.listType,idx:n,onDelItem:e.props.onDelItem,onExchangeList:e.props.onExchangeList,onRenameTodo:e.props.onRenameTodo})}));return a.a.createElement("ul",{className:this.props.className},n)}}]),n}(a.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={isInput:!1},o.inputRef=a.a.createRef(),o}return Object(c.a)(n,[{key:"handleDragStart",value:function(e){e.dataTransfer.setData("text/plain","hello")}},{key:"handleDrop",value:function(e){console.log()}},{key:"render",value:function(){var e=this;return a.a.createElement("li",{className:"todo-list-item",draggable:"true",onDragStart:function(){return e.handleDragStart()},onDrop:function(){return e.handleDrop()}},"todoList"===this.props.listType?a.a.createElement("input",{type:"checkbox",className:"item-check",onClick:function(t){return e.props.onExchangeList(e.props.idx,e.props.listType,t)}}):a.a.createElement("input",{type:"checkbox",className:"item-check",onChange:function(t){return e.props.onExchangeList(e.props.idx,e.props.listType,t)},checked:!0}),this.state.isInput?a.a.createElement("input",{className:"item-content-input",value:this.props.item,ref:this.inputRef,onChange:function(t){return e.props.onRenameTodo(e.props.idx,e.props.listType,t)},onBlur:function(){return e.setState({isInput:!e.state.isInput})}}):a.a.createElement("p",{className:"item-content-p",onClick:function(){e.setState({isInput:!e.state.isInput},(function(){e.inputRef.current.focus()}))}},this.props.item),a.a.createElement("span",{className:"item-delete",onClick:function(){return e.props.onDelItem(e.props.idx,e.props.listType)}},"X"))}}]),n}(a.a.Component),b=p,L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("footer",null,a.a.createElement("span",null,"Copyright \xa9 2020",a.a.createElement("a",{className:"author",href:"https://github.com/knightyun"},"knightyun.")),a.a.createElement("span",{className:"clear-todo",onClick:this.props.onCLearTodo},"clear"))}}]),n}(a.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;Object(r.a)(this,n);return(o=t.call(this,e)).state=localStorage.todo?JSON.parse(localStorage.todo):{todoLists:[],doneLists:[]},o.handleAddTodo=o.handleAddTodo.bind(Object(l.a)(o)),o.handleDelItem=o.handleDelItem.bind(Object(l.a)(o)),o.handleExchangeList=o.handleExchangeList.bind(Object(l.a)(o)),o.handleRenameTodo=o.handleRenameTodo.bind(Object(l.a)(o)),o.handleClearTodo=o.handleClearTodo.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"handleAddTodo",value:function(e){this.setState((function(t){return{todoLists:Array.prototype.concat.call(t.todoLists,e).reverse()}}),(function(){}))}},{key:"handleDelItem",value:function(e,t){"todoList"!==t?"doneList"!==t||this.setState((function(t){var n=t.doneLists.slice();return Array.prototype.splice.call(n,e,1),{doneLists:n}})):this.setState((function(t){var n=t.todoLists.slice();return Array.prototype.splice.call(n,e,1),{todoLists:n}}))}},{key:"handleExchangeList",value:function(e,t,n){n.preventDefault(),"todoList"===t&&(this.setState((function(t){return{doneLists:Array.prototype.concat.call(t.todoLists[e],t.doneLists)}})),this.handleDelItem(e,t)),"doneList"===t&&(this.setState((function(t){return{todoLists:Array.prototype.concat(t.todoLists,t.doneLists[e])}})),this.handleDelItem(e,t))}},{key:"handleRenameTodo",value:function(e,t,n){var o=n.target.value;"todoList"===t&&this.setState((function(t){var n=t.todoLists;return n[e]=o,{todoLists:n}})),"doneList"===t&&this.setState((function(t){var n=t.doneLists;return n[e]=o,{doneLists:n}}))}},{key:"handleClearTodo",value:function(){this.setState({todoLists:[],doneLists:[]})}},{key:"render",value:function(){var e=this.state;return localStorage.setItem("todo",JSON.stringify(e)),a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{onAddTodo:this.handleAddTodo}),a.a.createElement(b,{todoLists:this.state.todoLists,doneLists:this.state.doneLists,onDelItem:this.handleDelItem,onExchangeList:this.handleExchangeList,onRenameTodo:this.handleRenameTodo}),a.a.createElement(L,{onCLearTodo:this.handleClearTodo}))}}]),n}(a.a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.body),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.43357ff0.chunk.js.map