package ex03_variable;

public class Ex_Variable02 {
	public static void main(String[] args) {
		 
		//논리형
		boolean b = true;
		System.out.println("b의 값 :" + b);
		
		b = false; // 다시 대입을 하면 원래 있던 값은 없어짐
		System.out.println("b의 값 :" + b);
		
		// b = 1; 자료형의 값이 올바르지 않아 오류가 발생
		
		//문자형
		char ch = 'A';
		System.out.println("Ch의 값 :" + ch);
		
		ch = 66; // 얘는 되네?
		System.out.println("Ch의 값 :" + ch);
		// 아스키 코드 값으로 변환되어 출력
		
		//정수형+
		// byte b1 = 128; byte 자료형의 표현범위를 벗어나서 오류 발생
		byte b1 = 127;
		short s = 32767;
		int n = 550;

		
		System.out.println("b1의 값 : " + b1);
		System.out.println("s의 값 : " + s);
		System.out.println("n의 값 : " +n);
		
		//실수형
		// 자바에서 실수는 기본적으로 double형으로 인식하기 때문에 float자료형을 사용한다는 것을 명시해줘야 한다.
		float f = 3.14f; 
		
		//내가 만드려는 변수의 타입이 어차피 같다면 한번에 여러개를 선언하는것도 가능
		float f1=3.145f,f2=1.23f;
		
		
		System.out.println("f의 값 : " + f);
		System.out.println("f1의 값 : " + f1);
		System.out.println("f2의 값 : " + f2);
		
		
		//변수를 이용해 다른 변수에 값 복사하기
		int myAge = 20;
		int yourAge = myAge;
		
		System.out.println("내 나이 : " + myAge);
		System.out.println("친구 나이 : " + yourAge);
		
		// 두 변수에 들어있는 값을 바꾸려면 어떻게 해야할까?
		int su1 = 20, su2 = 30;
		
		System.out.println("변경전");
		System.out.println("su1 : " + su1);
		System.out.println("su2 : " + su2);
		
		// 내용물을 임시로 담아놓을 컵이 필요하다.
		int temp = 0;
		
		temp = su1; // temp==20
		su1 = su2;  // su1 == 30
		su2 = temp;  // su2 == 20
		
		System.out.println("변경후");
		System.out.println("su1 : " + su1);
		System.out.println("su2 : " + su2);
		
		
		
		
		
		
		
	}
}
