(this["webpackJsonptodo-list-react-ts"]=this["webpackJsonptodo-list-react-ts"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),o=n(8),i=n.n(o),r=n(3),c=n(4),d=n(2),l=n(6),h=n(5),u=n(0),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("footer",{children:[Object(u.jsxs)("span",{children:["Copyright \xa9 2020",Object(u.jsx)("a",{className:"author",href:"https://github.com/knightyun/todo-list-react",children:"knightyun."})]}),Object(u.jsx)("span",{className:"clear-todo",onClick:this.props.onCLearTodo,children:"clear"})]})}}]),n}(a.a.Component),j=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={todo:""},s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s.handleChange=s.handleChange.bind(Object(d.a)(s)),s}return Object(c.a)(n,[{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),this.setState((function(t){return{todo:t.todo.trim()}}),(function(){e.state.todo.length>0&&(e.props.onAddTodo(e.state.todo),e.setState({todo:""}))}))}},{key:"handleChange",value:function(t){this.setState({todo:t.target.value})}},{key:"render",value:function(){return Object(u.jsx)("header",{children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("span",{className:"header-label",children:"ToDoList"}),Object(u.jsx)("input",{className:"header-input",type:"text",onChange:this.handleChange,value:this.state.todo,placeholder:"\u6dfb\u52a0 ToDo"})]})})}}]),n}(a.a.Component),b=a.a.createContext({}),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"doing",children:[Object(u.jsxs)("div",{className:"doing-head",children:[Object(u.jsx)("div",{className:"head-text",children:"\u6b63\u5728\u8fdb\u884c1"}),Object(u.jsx)("div",{className:"head-num",children:this.props.doingLists.length})]}),Object(u.jsx)(f,{lists:this.props.doingLists,className:"doing-list",listType:"todoList"})]})}}]),n}(a.a.Component),m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"done",children:[Object(u.jsxs)("div",{className:"done-head",children:[Object(u.jsx)("div",{className:"head-text",children:"\u6b63\u5728\u8fdb\u884c"}),Object(u.jsx)("div",{className:"head-num",children:this.props.doneLists.length})]}),Object(u.jsx)(f,{lists:this.props.doneLists,className:"done-list",listType:"doneList"})]})}}]),n}(a.a.Component),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).context=void 0,t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props.lists||[],n=Array.prototype.map.call(e,(function(e,n){return Object(u.jsx)(v,{item:e,idx:n,listType:t.props.listType,onDelItem:t.context.handleDelItem,onExchangeList:t.context.handleExchangeList,onRenameTodo:t.context.handleRenameTodo},n)}));return Object(u.jsx)("ul",{className:this.props.className,children:n})}}]),n}(a.a.Component);f.contextType=b;var v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isInput:!1},t.inputRef=a.a.createRef(),t}return Object(c.a)(n,[{key:"handleDragStart",value:function(t){t.dataTransfer.setData("text/plain","hello")}},{key:"handleDrop",value:function(t){}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("li",{className:"todo-list-item",draggable:"true",onDragStart:this.handleDragStart,onDrop:this.handleDrop,children:["todoList"===this.props.listType?Object(u.jsx)("input",{type:"checkbox",className:"item-check",onClick:function(e){return t.props.onExchangeList(t.props.idx,t.props.listType,e)}}):Object(u.jsx)("input",{type:"checkbox",className:"item-check",onChange:function(e){return t.props.onExchangeList(t.props.idx,t.props.listType,e)},checked:!0}),this.state.isInput?Object(u.jsx)("input",{className:"item-content-input",value:this.props.item,ref:this.inputRef,onChange:function(e){return t.props.onRenameTodo(t.props.idx,t.props.listType,e)},onBlur:function(){return t.setState({isInput:!t.state.isInput})}}):Object(u.jsx)("p",{className:"item-content-p",onClick:function(){t.setState({isInput:!t.state.isInput},(function(){var e;null===(e=t.inputRef.current)||void 0===e||e.focus()}))},children:this.props.item}),Object(u.jsx)("span",{className:"item-delete",onClick:function(){return t.props.onDelItem(t.props.idx,t.props.listType)},children:"X"})]})}}]),n}(a.a.Component),x=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("main",{children:[Object(u.jsx)(O,{doingLists:this.props.todoLists}),Object(u.jsx)(m,{doneLists:this.props.doneLists})]})}}]),n}(a.a.Component),y=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={todoLists:[],doneLists:[]},s.handlers={handleDelItem:s.handleDelItem.bind(Object(d.a)(s)),handleExchangeList:s.handleExchangeList.bind(Object(d.a)(s)),handleRenameTodo:s.handleRenameTodo.bind(Object(d.a)(s))},localStorage.todo&&(s.state=JSON.parse(localStorage.todo)),s.handleAddTodo=s.handleAddTodo.bind(Object(d.a)(s)),s.handleDelItem=s.handleDelItem.bind(Object(d.a)(s)),s.handleExchangeList=s.handleExchangeList.bind(Object(d.a)(s)),s.handleRenameTodo=s.handleRenameTodo.bind(Object(d.a)(s)),s.handleClearTodo=s.handleClearTodo.bind(Object(d.a)(s)),s}return Object(c.a)(n,[{key:"handleAddTodo",value:function(t){this.setState((function(e){return{todoLists:Array.prototype.concat.call(e.todoLists,t).reverse()}}))}},{key:"handleDelItem",value:function(t,e){"todoList"===e?this.setState((function(e){var n=e.todoLists.slice();return Array.prototype.splice.call(n,t,1),{todoLists:n}})):"doneList"===e&&this.setState((function(e){var n=e.doneLists.slice();return Array.prototype.splice.call(n,t,1),{doneLists:n}}))}},{key:"handleExchangeList",value:function(t,e,n){n.preventDefault(),"todoList"===e&&(this.setState((function(e){return{doneLists:Array.prototype.concat.call(e.todoLists[t],e.doneLists)}})),this.handleDelItem(t,e)),"doneList"===e&&(this.setState((function(e){return{todoLists:Array.prototype.concat(e.todoLists,e.doneLists[t])}})),this.handleDelItem(t,e))}},{key:"handleRenameTodo",value:function(t,e,n){var s=n.target.value;"todoList"===e?this.setState((function(e){var n=e.todoLists;return n[t]=s,{todoLists:n}})):"doneList"===e&&this.setState((function(e){var n=e.doneLists;return n[t]=s,{doneLists:n}}))}},{key:"handleClearTodo",value:function(){this.setState({todoLists:[],doneLists:[]})}},{key:"render",value:function(){var t=this.state;return localStorage.setItem("todo",JSON.stringify(t)),Object(u.jsxs)(b.Provider,{value:this.handlers,children:[Object(u.jsx)(j,{onAddTodo:this.handleAddTodo}),Object(u.jsx)(x,{todoLists:this.state.todoLists,doneLists:this.state.doneLists}),Object(u.jsx)(p,{onCLearTodo:this.handleClearTodo})]})}}]),n}(a.a.Component);n(14);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d1b550dc.chunk.js.map