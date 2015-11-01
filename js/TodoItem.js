function TodoItem(text){
	this.text = ko.observable(text);
	this.isComplete = ko.observable(false);
};