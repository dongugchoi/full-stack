package ex04_if;

import java.util.Scanner;

public class Ex05_multi_if {

	public static void main(String[] args) {
		//if문의 중첩
		//제어문은 자유롭게 중첩해서 사용할 수 있다.
		
		//10보다 작으면서 홀수인지 판별하기
		
		Scanner scan = new Scanner(System.in);
		
		int num = scan.nextInt();
		
		if(num <= 10) {
			if(num% 2==1) {
				System.out.println(num + "은(는) 홀수입니다.");
			}else {
				System.out.println(num +"은(는) 짝수 입니다.");
			}
		}

	}

}
