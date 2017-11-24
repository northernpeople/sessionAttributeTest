console.log("js loaded");

var todos = {
	tdList : ["first todo"],
	addTodo : function(td){
		this.tdList.push(td);
	},
	showTodos : function(){
		this.tdList.forEach((el, i, arr) => { console.log(arr[i])})
	},
	changeTodo : function(pos, todo){
		this.tdList.splice(pos, 1, todo);
	},
	deleteTodo : function(pos){
		this.tdList.splice(pos, 1);
	},
	deleteAll : function(){
		this.tdList = [];
	}
}

var view = {
	displayTodos : () => {
		var viewUl = document.querySelector("ul");
		viewUl.textContent = "";
		todos.tdList.forEach(
				(e, i, a) => {
			var viewLi = document.createElement("li");
			viewLi.textContent = e;
			viewUl.appendChild(viewLi); }
		);
		
	}
}

var handlers = {
		
	
	
	addTodo : () => {
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		todos.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = "";
		view.displayTodos();
	},
	
	changeTodo : () => {
		var changeTodoPosition = document.getElementById("changeTodoPosition");
		var changeTodoText = document.getElementById("changeTodoText");
		todos.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
		changeTodoPosition.value = "";
		changeTodoText.value = "";
		view.displayTodos();

	},
	
	deleteTodo : () => {
		var deleteTodoPosition = document.getElementById("deleteTodoPosition");
		todos.deleteTodo(deleteTodoPosition.valueAsNumber);
		deleteTodoPosition.value="";
		view.displayTodos();
	},
	
	deleteAllTodos : () => {
		todos.deleteAll();
		view.displayTodos();
	}
};