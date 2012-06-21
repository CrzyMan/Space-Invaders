Object.prototype.intersectsWith = function(other){
	
	// catch if not all necesarry proerties were supplied
	if ((this.x==null && this.pos.x==null) || (this.y==null && this.pos.y==null) || this.width==null ||
		(other.x==null && other.pos.x==null) ||	(other.y==null && other.pos.y==null) ||	other.width==null){
		
		console.log("Error: Object.prototype.intersectsWith; Not all necesarry properties were supplied;")
		return false;
	}
	
	var x1 = this.x || this.pos.x;
	var y1 = this.y || this.pos.y;
	var w1 = this.width;
	
	var x2 = other.y || other.pos.x;
	var y2 = other.y || other.pos.y;
	var w2 = other.width;
	
	// finish collision logic
	
	
}