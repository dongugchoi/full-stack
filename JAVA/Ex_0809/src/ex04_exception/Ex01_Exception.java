package ex04_exception;

public class Ex01_Exception {

public static void main(String[] args) {
	//NullPointerException
		
		//배열을 변수를 만들기만 하고 생성하지 않음
		String[] strArray = null;
		
		//생성되지 않은 배열을 출력하려고 하니 에러발생
		System.out.println("strArray[0] = " + strArray[0]);
		
	}
	
}
