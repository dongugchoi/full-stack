package ex02;

import java.util.Scanner;

//온도구하기

public class Ex02_02Main extends Ex02_02{
		public static void main(String[] args) {
			
			Scanner sc = new Scanner(System.in);
			
			System.out.println("1번 : 화씨 → 섭씨");
			System.out.println("2번 : 섭씨 → 화씨");
			
			System.out.print("번호를 입력하세요 :");
			int temperature = sc.nextInt();
			
			if(temperature == 1) {
				System.out.println("온도 입력 : ");
				Double ftoc = sc.nextDouble();
				
				System.out.printf("섭씨 : %.1f ", fToc(ftoc));
			}else if(temperature == 2) {
				System.out.println("바꿀 온도 입력 : ");
				Double ctof = sc.nextDouble();
				
				System.out.printf("화씨 : %.1f ", cTof(ctof));
			}else {
				System.out.println("번호를 잘 못 입력하셨습니다.");
				System.out.println("프로그램을 종료합니다.");
			}
			
			
		}
}
