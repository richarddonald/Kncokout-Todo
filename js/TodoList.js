function TodoList(){
	this.list = ko.observableArray([]);  
	
	
	this.getSize = ko.pureComputed(function(){
		return this.list().length;
	},this);
	
	
	this.completedCount = ko.pureComputed(function(){
		var count = 0;
		for (var i = 0; i< this.list().length; i++){
			if (this.list()[i].isComplete()){
				count++;
			}
		}
		return count;
	}, this);	
};


TodoList.prototype.addItem = function(item){
	for (var i = 0; i < this.list().length; i++){
		if (this.list()[i].text().toLowerCase() === item.text().toLowerCase()){
			return;
		}
	}
	
	if (item.text().trim().length == 0){
		return;
	}
	
	this.list.push(item);
};

TodoList.prototype.removeItem = function(index){
	return this.list.splice(index,1)[0];
};


TodoList.prototype.getItem = function(index){
	if (this.list().length-1 < index || index < 0){
		throw "Item does not exist";
	}
	return this.list()[index];
};