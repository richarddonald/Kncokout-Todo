describe("Adding and retrieving items from Todo List", function(){
	var todoList;
	
	beforeEach(function(){
		todoList = new TodoList();
	});
	
	it("Adding a single item to list should have size one", function(){
		todoList.addItem(new TodoItem("Test Item"));
		expect(todoList.getSize()).toBe(1);
	});
	
	it("Adding two items to list should have size two", function(){
		todoList.addItem(new TodoItem("Item #1"));
		todoList.addItem(new TodoItem("Item #2"));
		expect(todoList.getSize()).toBe(2);
	});
	
	it("Items can be retrieved from the list", function(){
		todoList.addItem(new TodoItem("Item #1"));
		todoList.addItem(new TodoItem("Item #2"));
		
		expect(todoList.getItem(0).text()).toBe("Item #1");
		expect(todoList.getItem(1).text()).toBe("Item #2");
	});
	
	it("New items added to list should not be completed", function(){
		todoList.addItem(new TodoItem("Item #1"));
		todoList.addItem(new TodoItem("Item #2"));
		expect(todoList.getCompletedCount()).toBe(0);
		expect(todoList.getItem(0).isCompleted()).toBe(false);
	});
	
	it("An item cannot be on the list more than once - case insensitive", function(){
		todoList.addItem(new TodoItem("Item #1"));
		todoList.addItem(new TodoItem("Item #1"));
		todoList.addItem(new TodoItem("item #1"));
		todoList.addItem(new TodoItem("ITEM #1"));
		expect(todoList.getSize()).toBe(1);
	});
	
});


describe("Removing Item from Todo List", function(){
	var todoList; 
	
	beforeEach(function(){
		todoList = new TodoList();
		todoList.addItem(new TodoItem("Item #1"));
		todoList.addItem(new TodoItem("Item #2"));
		todoList.addItem(new TodoItem("Item #3"));
	});
	
	
	it("Removing item from list should reduce its size", function(){
		todoList.removeItem(1);
		expect(todoList.getSize()).toBe(2);
	});
	
	it("Removing an item that doesn't exist from a todo should not change list size", function(){
		todoList.removeItem(8);
		expect(todoList.getSize()).toBe(3);
		todoList.removeItem(-1);
		expect(todoList.getSize()).toBe(3);
	});
	
	it("Removing a completed item should reduce the completed count", function(){
		todoList.getItem(0).isComplete(true);
		todoList.getItem(2).isComplete(true);
		expect(todoList.completedCount()).toBe(2);
		todoList.removeItem(2);
		expect(todoList.completedCount()).toBe(1);
	});
	
})

describe("Completing and uncompleting items on Todo list", function(){
	var todoList;
	
	beforeEach(function(){
		todoList = new TodoList();
		todoList.addItem(new TodoItem("Item #1"));
		todoList.addItem(new TodoItem("Item #2"));
		todoList.addItem(new TodoItem("Item #3"));
		todoList.addItem(new TodoItem("Item #4"));
		todoList.addItem(new TodoItem("Item #5"));
	});
	
	
	it("Completing an item increases the completed count", function(){
		todoList.getItem(2).isComplete(true);
		expect(todoList.completedCount()).toBe(1);
	});
	
	
	it("Attempting to complete an item more than once does not increase completed count", function(){
		todoList.getItem(2).isComplete(true);
		todoList.getItem(2).isComplete(true);
		expect(todoList.completedCount()).toBe(1);
	});
	
	it("Uncompleting an item reduces the completed count", function(){
		todoList.getItem(2).isComplete(true);
		todoList.getItem(3).isComplete(true);
		todoList.getItem(5).isComplete(true);
		expect(todoList.completedCount()).toBe(3);
		todoList.getItem(2).isComplete(false);
		expect(todoList.completedCount()).toBe(2);
	});

});