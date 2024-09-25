package ex01_switch;

import java.util.Scanner;

public class Ex05_Switch {

	public static void main(String[] args) {
		//10이하의 숫자를 키보드에서 입력받는다.
		//해당 숫자가 짝수인지 홀수인지 판별하는 코드를 switch로 작성
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("숫자입력 :");
		int num = scan.nextInt();
		
		if(num <= 10) {
			switch(num%2) {
				case 0-> System.out.println("짝수");
				case 1-> System.out.println("홀수");
			}
		}else {
			System.out.println("10이하의 숫자만 입력해주세요");
		}
		
		
		
		
		
		//키보드에서 달(month)를 입력받아
		//해당 달이 몇일까지 있는지 switch문을 이용해 작성해주세요.
		//결과
		//X월은 X일까지 있습니다.
		
		System.out.print("년도입력 :");
		int year = scan.nextInt();
		
		System.out.println("1월부터 12월까지 입력 :");
		int month = scan.nextInt();
		
			if(month <= 12) {
				switch(month) {
				case 1,3,5,7,8,10,12 -> System.out.printf("%d월은 %d일까지 있습니다.\n",month,31);
				case 4,6,9,11 -> System.out.printf("%d월은 %d일까지 있습니다.\n",month,30);
				}if(year%4==0) {
				 System.out.printf("%d월은 %d일까지 있습니다. \n",month,29);
				 }else {
				 System.out.printf("%d월은 %d일까지 있습니다. \n",month,28);
				 }		
			}else {
				System.out.println("월을 잘못 입력하셨습니다.");
			}

		
		//계산기 프로그램
		//두 개의 정수를 입력받는다.
		//산술연산자도 입력받아서 문자열에 담는다.
		//switch문을 이용하여 정수의 연산을 수행하는 코드 작성하기
		
		System.out.println("계산할 첫 번째 숫자 :");
		int a = scan.nextInt();

		System.out.println("계산할 두 번째 숫자 :");
		int b = scan.nextInt();
		
		System.out.println("산술연산자 입력 ex) +,-,/,%,* :");
		char c = scan.next().charAt(0);
	
		
		switch(c) {
		case '+' -> System.out.printf("더하기 : %d  %s  %d = %d",a,c,b,a+b);
		case '-' -> System.out.printf("빼기 : %d  %s  %d = %d",a,c,b,a-b);
		//수학적인 나누기를 하려면 숫자 하나를 double로 형변환을 하변된다.
		case '/' -> System.out.printf("나누기 : %d  %s  %d = %d",a,c,b,a/(double)b);
		case '%' -> System.out.printf("나머지 : %d  %s  %d = %d",a,c,b,a%b);
		case '*' -> System.out.printf("곱셈 :%d  %s  %d = %d",a,c,b,a*b);
		default -> System.out.println("연산자가 없거나 잘못 입력하셨습니다.");
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}

}
