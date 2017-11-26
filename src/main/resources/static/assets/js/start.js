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
	displayTodos : function() {
		var viewUl = document.querySelector("ul");
		viewUl.textContent = "";
		todos.tdList.forEach(
				(e, i, a) => {
			var viewLi = document.createElement("li");
			viewLi.id = i;
			viewLi.textContent = e;
			viewLi.appendChild(this.createDeleteButton())
			viewUl.appendChild(viewLi); }
		);
	},
	createDeleteButton : function() {
		var deleteButton = document.createElement("button");
		deleteButton.textContent = "delete";
		deleteButton.className="deleteButton";		
		return deleteButton;
	},
	setUpEventListeners : function(){
		document.querySelector("ul").addEventListener("click", function(event){
			console.log(event.target.parentNode.id);
			var elementClicked = event.target;
			if(elementClicked.className === "deleteButton"){
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
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
	deleteTodo : function (deleteTodoPosition) {
		todos.deleteTodo(deleteTodoPosition.valueAsNumber);
		view.displayTodos();
	}
};

view.setUpEventListeners();
