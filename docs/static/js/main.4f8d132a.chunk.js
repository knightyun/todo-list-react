(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(7),r=n.n(s),i=(n(13),n(1)),c=n(2),l=n(5),d=n(4),u=n(3),h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={todo:""},a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a.handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState((function(e){return{todo:e.todo.trim()}}),(function(){t.state.todo.length>0&&(t.props.onAddTodo(t.state.todo),t.setState({todo:""}))}))}},{key:"handleChange",value:function(e){this.setState({todo:e.target.value})}},{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("span",{className:"header-label"},"ToDoList",o.a.createElement("span",{className:"header-link"},o.a.createElement("a",{href:"/",className:"home"},"JS"),"|",o.a.createElement("a",{href:"/todo-list-react-ts/index.html"},"TS"),"|",o.a.createElement("a",{href:"/todo-list-react-ts-hooks/index.html"},"Hook"))),o.a.createElement("input",{className:"header-input",type:"text",onChange:this.handleChange,value:this.state.todo,placeholder:"\u6dfb\u52a0 ToDo"})))}}]),n}(o.a.Component),p=o.a.createContext(),m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(f,{doingLists:this.props.todoLists}),o.a.createElement(v,{doneLists:this.props.doneLists}))}}]),n}(o.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"doing"},o.a.createElement("div",{className:"doing-head"},o.a.createElement("div",{className:"head-text"},"\u6b63\u5728\u8fdb\u884c"),o.a.createElement("div",{className:"head-num"},this.props.doingLists.length)),o.a.createElement(b,{lists:this.props.doingLists,className:"doing-list",listType:"todoList"}))}}]),n}(o.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"done"},o.a.createElement("div",{className:"done-head"},o.a.createElement("div",{className:"head-text"},"\u6b63\u5728\u8fdb\u884c"),o.a.createElement("div",{className:"head-num"},this.props.doneLists.length)),o.a.createElement(b,{lists:this.props.doneLists,className:"done-list",listType:"doneList"}))}}]),n}(o.a.Component),b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.lists||[],n=Array.prototype.map.call(t,(function(t,n){return o.a.createElement(g,{item:t,key:n,idx:n,listType:e.props.listType,onDelItem:e.context.handleDelItem,onExchangeList:e.context.handleExchangeList,onRenameTodo:e.context.handleRenameTodo})}));return o.a.createElement("ul",{className:this.props.className},n)}}]),n}(o.a.Component);b.contextType=p;var g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={isInput:!1},a.inputRef=o.a.createRef(),a}return Object(c.a)(n,[{key:"handleDragStart",value:function(e){e.dataTransfer.setData("text/plain","hello")}},{key:"handleDrop",value:function(e){console.log()}},{key:"render",value:function(){var e=this;return o.a.createElement("li",{className:"todo-list-item",draggable:"true",onDragStart:function(){return e.handleDragStart()},onDrop:function(){return e.handleDrop()}},"todoList"===this.props.listType?o.a.createElement("input",{type:"checkbox",className:"item-check",onClick:function(t){return e.props.onExchangeList(e.props.idx,e.props.listType,t)}}):o.a.createElement("input",{type:"checkbox",className:"item-check",onChange:function(t){return e.props.onExchangeList(e.props.idx,e.props.listType,t)},checked:!0}),this.state.isInput?o.a.createElement("input",{className:"item-content-input",value:this.props.item,ref:this.inputRef,onChange:function(t){return e.props.onRenameTodo(e.props.idx,e.props.listType,t)},onBlur:function(){return e.setState({isInput:!e.state.isInput})}}):o.a.createElement("p",{className:"item-content-p",onClick:function(){e.setState({isInput:!e.state.isInput},(function(){e.inputRef.current.focus()}))}},this.props.item),o.a.createElement("span",{className:"item-delete",onClick:function(){return e.props.onDelItem(e.props.idx,e.props.listType)}},"X"))}}]),n}(o.a.Component),y=m,L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("span",null,"Copyright \xa9 2020",o.a.createElement("a",{className:"author",href:"https://github.com/knightyun/todo-list-react"},"knightyun.")),o.a.createElement("span",{className:"clear-todo",onClick:this.props.onCLearTodo},"clear"))}}]),n}(o.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(i.a)(this,n);return(a=t.call(this,e)).state=localStorage.todo?JSON.parse(localStorage.todo):{todoLists:[],doneLists:[]},a.handleAddTodo=a.handleAddTodo.bind(Object(l.a)(a)),a.handleDelItem=a.handleDelItem.bind(Object(l.a)(a)),a.handleExchangeList=a.handleExchangeList.bind(Object(l.a)(a)),a.handleRenameTodo=a.handleRenameTodo.bind(Object(l.a)(a)),a.handleClearTodo=a.handleClearTodo.bind(Object(l.a)(a)),a.handlers={handleDelItem:a.handleDelItem,handleExchangeList:a.handleExchangeList,handleRenameTodo:a.handleRenameTodo},a}return Object(c.a)(n,[{key:"handleAddTodo",value:function(e){this.setState((function(t){return{todoLists:Array.prototype.concat.call(t.todoLists,e).reverse()}}),(function(){}))}},{key:"handleDelItem",value:function(e,t){"todoList"!==t?"doneList"!==t||this.setState((function(t){var n=t.doneLists.slice();return Array.prototype.splice.call(n,e,1),{doneLists:n}})):this.setState((function(t){var n=t.todoLists.slice();return Array.prototype.splice.call(n,e,1),{todoLists:n}}))}},{key:"handleExchangeList",value:function(e,t,n){n.preventDefault(),"todoList"===t&&(this.setState((function(t){return{doneLists:Array.prototype.concat.call(t.todoLists[e],t.doneLists)}})),this.handleDelItem(e,t)),"doneList"===t&&(this.setState((function(t){return{todoLists:Array.prototype.concat(t.todoLists,t.doneLists[e])}})),this.handleDelItem(e,t))}},{key:"handleRenameTodo",value:function(e,t,n){var a=n.target.value;"todoList"===t&&this.setState((function(t){var n=t.todoLists;return n[e]=a,{todoLists:n}})),"doneList"===t&&this.setState((function(t){var n=t.doneLists;return n[e]=a,{doneLists:n}}))}},{key:"handleClearTodo",value:function(){this.setState({todoLists:[],doneLists:[]})}},{key:"render",value:function(){var e=this.state;return localStorage.setItem("todo",JSON.stringify(e)),o.a.createElement(p.Provider,{value:this.handlers},o.a.createElement(h,{onAddTodo:this.handleAddTodo}),o.a.createElement(y,{todoLists:this.state.todoLists,doneLists:this.state.doneLists}),o.a.createElement(L,{onCLearTodo:this.handleClearTodo}))}}]),n}(o.a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=document.querySelector("#root");r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),j),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4f8d132a.chunk.js.map