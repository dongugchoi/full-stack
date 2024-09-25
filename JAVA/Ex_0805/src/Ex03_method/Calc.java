package Ex03_method;

public class Calc {

	//두 수를 더하는 sum메서드 만들기
	//"두 수의 합은 X입니다."라는 출력문 작성하기
	
	 void sum(int a, int b) {
		System.out.printf("두 수의 합은 %d 입니다.\n",a+b);
	}
	 
	 int sum(int[] nums) {
		 int result = 0;
		 
		 for(int i =0; i<nums.length; i++) {
			 result += nums[i];
		 }
//		 System.out.println("숫자들의 합은 : " +result +" 입니다.");
		 return result;
	 }
	 
	 
	
	
}
