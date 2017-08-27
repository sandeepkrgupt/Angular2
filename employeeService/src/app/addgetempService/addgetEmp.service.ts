export class empSalary{
getgross(bs : number){
		return (bs+this.getda(bs)+this.getta(bs)+this.gethra(bs));
	}
	
	getda(bs : number){
		return (bs*10)/100;
	}
	getta(bs: number){
		return (bs*7)/100;
	}
	gethra(bs : number){
		return(bs*10)/100;
	}
}