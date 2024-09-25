package ex04_lamda;

@FunctionalInterface
//@FunctionalInterface
//인터페이스에 추상메서드가 무조건 1개 있어야 오류가 나지 않는다.

public interface Calculator {
	int plus(int num1, int num2);
	//int minus(int num1, int num2);
}
