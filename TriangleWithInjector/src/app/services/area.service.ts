export class areaservice{
	findarea(a:number,b:number,c:number){
		var p = (a+b+c)/2;
		var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
		return s;
	}
}