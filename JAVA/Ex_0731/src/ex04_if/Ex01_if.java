package ex04_if;

import java.util.Scanner;

public class Ex01_if {
	
	public static void main(String[] args) {
		int result = 0;
		if(3 > 2) {
			result = 3;
//			int n = 10; 
		}
		
		System.out.println(result);
//		System.out.println(n);
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("나이를 입력해주세요 : ");
		int age = sc.nextInt();
		if(age > 19) {
			System.out.println("성인입니다.");
		}
		
		
		
		
	}

}
