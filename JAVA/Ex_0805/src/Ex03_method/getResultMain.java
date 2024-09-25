package Ex03_method;

import java.util.Scanner;

public class getResultMain {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("숫자입력 :");
		int num1 = sc.nextInt();
		
		System.out.println("연산자 입력 :");
		String op = sc.next();
		
		
		System.out.print("숫자입력 :");
		int num2 = sc.nextInt();
		
		GetResult get = new GetResult();
		
		get.getResult(num1,op, num2);
	
		
		
	}
}
