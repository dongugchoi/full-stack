package ex07_test;

public abstract class Calculator {
	public abstract int add(int a, int b);
	//정수형 변수 2개를 매개변수로 가지는 추상메서드 add();
	//반환형 int
	public abstract int substract(int a, int b);
	//정수형 변수 2개를 매개변수로 가지는 추상메서드 substract();
	//반환형 int
	public abstract double average(int[] a);
	//정수형 배열을 매개변수로 갖는 average() 추상 메서드
	//반환형 double
	
	//GoodCalc클래스를 만들고 Calculator를 상속받아
	//두 수를 더하여 반환하는 add()
	//두 수를 빼서 반환하는 substract;
	//배열의 평균을 구하는 average();
	
	
}
