package ex04_if;

import java.util.Scanner;

public class Ex02_if_else {

	public static void main(String[] args) {
		int num =5;
		if(num > 4) {
			System.out.println(num+"은(는) 4보다 큽니다.");
		}else {
			System.out.println(num+"은(는) 4보다 작습니다.");
		}
		
		
		//두개의 숫자 비교하기
		int a =4;
		int b =10;
		
		if(a > b) {
			System.out.println("a가 b보다 큽니다.");
		} else {
			if( a== b) {
				System.out.println("a는 b와 같습니다");
			}else {
				System.out.println("a는 b보다 작습니다.");
			}
		}
		
		
		//int형 변수 x가 10보다크고 20보다 작을 때 true인 조건식
		int x = 15;
		if(x >= 10 && x < 20) {
			System.out.println(true);
		}
		
		//char형 변수 ch가 'x'또는 'X'일 때 true인 조건식
		char ch = 'x';
		if(ch == 'x' || ch == 'X') {
			System.out.println(true);
		}
		
		//char형변수 ch2가 알파벳(대문자 또는 소문자)일 때 true인 조건식
		char ch2 = 'G';
		if(('a' <= ch2 && 'z' >= ch2) || 'A' <= ch2 && 'Z' >= ch2) {
			System.out.println(true);
		}
	
		//삼항연산자로 만들었던 x개의 농구공을 담기위한 박스의 개수 구하기
		//를 조건문으로 만들기 공의개수도 키보드에서 입력받기

		Scanner scan = new Scanner(System.in);
		
		System.out.println("현재 가지고 있는 농구공 개수 :");
		int n = scan.nextInt();
		System.out.println("담아야 할 농구공 개수 :");
		int ball = scan.nextInt();
		int box = 0;
		
		if(ball % n==0) {
			box = ball / n;
			System.out.printf("필요한 박스 개수: %d", box);
		}else {
			box = ball / n +1;
			System.out.printf("필요한 박스 개수: %d", box);
		}
		
		
		
		
		
		
		
	}

}
