package Ex03_method;

public class GetResult {
	//main에서 숫자 두개랑, 산술연산자를 전달 받아서 계산을 해서 반환하는
	//getResult()메서드 작성하기
	
	void getResult(int a, String b, int c) {
		if(b.equals("+")) {
			System.out.printf("%d + %d = %d\n",a,c,a+c);
		}else if(b.equals("-")) {
			System.out.printf("%d - %d = %d\n",a,c,a-c);
		}else if(b.equals("/")) {
			System.out.printf("%d / %d = %d\n",a,c,a/c);
		}else if(b.equals("*")) {
			System.out.printf("%d * %d = %d\n",a,c,a*c);
		}else {
			System.out.println("연산 기호가 올바르지 않습니다.");
			
		}
		
		
		
		
	}	
}
