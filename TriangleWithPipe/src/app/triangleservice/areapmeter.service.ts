export class Triangle{
	area(a : number, b : number, c: number){
		var s = (a+b+c)/2;
		var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
		return area;
	}
	peremeter(a : number, b : number, c: number){
		var s = a+b+c/2;
		var pmeter = s*(s-a)*(s-b)*(s-c)/2;
		return pmeter;
	}
}