package Ex03_method;

public class CalcMain {
	public static void main(String[] args) {
		Calc calc = new Calc();
		
		calc.sum(2, 3);
		
		int [] nums = {100,200};
		int n = calc.sum(nums);
		System.out.println("총합 : " + n);
	}
}
