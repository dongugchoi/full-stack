package ex01_switch;

public class Ex02_Switch {

	public static void main(String[] args) {
		//switch문의 비교값으로 사용이 가능한 자료형(실수는 안됌)
		//1. 정수(byte,short,int)
		//2. 문자형(char)
		//3. 문자열(String)
		
		String str ="홍";
		String result;
		
		
		switch(str) {
		case "박":
			result = "박길동";
			break;
		case "이":
			result = "이길동";
			break;
		case "독고":
			result = "독고길동";
			break;
		case "홍":
			result = "홍길동";
			break;
		default:
			result = "일치하는 성이 없습니다.";
		}
		
		System.out.println(result);

		
		char ch = 'B';
		
		switch(ch) {
		case 'A':
			System.out.println("A");
			break;
		case 'B':
			System.out.println("B");
			break;
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}

}
