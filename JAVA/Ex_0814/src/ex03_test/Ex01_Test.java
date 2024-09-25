package ex03_test;

class Gen <T>{
	
	public <T> void printArr(T[] arr) {
		
		for(int i = 0; i < arr.length; i++) {
			System.out.print(" " + arr[i]);
		}
	}

}


public class Ex01_Test {
	public static void main(String[] args) {
		
		Gen gen = new Gen();
		
		// 정수형
		Integer[] iArr = {1, 2, 3, 4, 5};
		
		// 더블형
		Double[] dArr = {1.1, 2.2, 3.3, 4.4, 5.5};
		
		// Character
		Character[] cArr = {'A', 'B', 'C', 'D', 'E'};
		
		//제네릭 이용
		//위의 배열들을 int, double, char와 같은 기본자료형으로 만들었다면
		//아래의 메서드에 대입할수 없다.
		//제네릭 타입은 반드시 객체를 처리하록 되어있다.
		gen.printArr(iArr);
		gen.printArr(dArr);
		gen.printArr(cArr);
	}
}
