package ex07_test;

public class CalculatorMain {
	public static void main(String[] args) {
		
		GoodCalc c = new GoodCalc();
		
		int [] a = {86,60,70};	
		System.out.printf("두 수의 합은 : %d\n" ,c.add(2, 3));
		System.out.printf("두 수의 차는 : %d\n"
				+ "" ,c.substract(5, 2));
		System.out.printf("두 수의 평균은 : %.2f\n" , c.average(a));
	}
}
