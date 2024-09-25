package ex02_control;

import java.util.Random;
import java.util.Scanner;

public class Ex02_Break {
	public static void main(String[] args) {
		//break문은 이전에 switch문을 학습할 때 case문을 종료할 때 사용되었다.
		//break라는 단어의 의미와 동일하게 반복문을 미리 종료할 때 사용한다.
		//반복문이 진행되는 도중, 특정 조건을 만족해 더이상 반복문을
		//실행할 필요 없이 종료하려고 할 때 사용한다.
		
		//난수의 생성
		//1. Random클래스 = 0.0 부터 1.0 사이의 난수 생성 (메서드의 실행결과가 double)
		//2. Math클래스 (java.lang패키지에 있는 클래스)
		//Math클래스가 static의 정의되어있기 때문에 Scanner와 달리 import하지 않아도 된다.
		int magicNumber = (int)(Math.random() *50) + 1; // *50은 50.0인데 int로 형변환
		// 0.0에 50을곱해도 0이나오기때문에 1을 더해준다.
		Scanner sc = new Scanner(System.in);
		boolean isMatched = false;
		
		//랜덤클래스 사용방법
//		Random rnd = new Random();
//		int r = rnd.nextInt(50)+1; // 0~49까지출력이라 +1해서 50을 맞춘다.
		
		//총합 -> 총합을 담아줄 변수
		//개수 -> 개수를세서 담아줄 변수
		//이지선다 -> 논리형 변수를 만들어서 사용
		
//		for(int i =0; i<10; i++) {
//			System.out.print("찾는 숫자를 입력 :");
//			int guess = sc.nextInt();
//			
//			if(guess == magicNumber) {
//				System.out.println((i+1)+"번째에 맞췄습니다.");
//				isMatched = true;
//				break;
//			}else if(guess > magicNumber) {
//				System.out.println("Down!");
//			}else if(guess < magicNumber) {
//				System.out.println("Up!!");
//			}//else if2의 끝
//		}//if의 끝
//		
//		if(!isMatched) {
//			System.out.println("정답을 맞추지 못했습니다.");
//		}
		
		
		
		//기타제어문(continue,break)의 특징
		//1.기타제어문 바로 아래는 어떠한 코드도 올 수 없다.
		//2.반복문 안에서만 사용이 가능하다.
		
		//3.다중 반복문일때 기타제어문을 가지고 있는 반복문에 대해서만 적용이 된다.
		
		//라벨을 이용하면 내가 원하는 반복문에 적용시킬수 있다. 
		happy:for(int i = 1; i <=3; i++) {
			for(int j = 1; j<=5; j++) {
				if(j%2 ==0) {
					continue happy; //다중 for문일땐 가까운 for문으로 이동한다.
				}//if의 끝
				System.out.print(j+" ");
			}//j for문의 끝
			System.out.println();
		}//i for문의 끝
		
		
		
		
		
		
		
		
	} // main의 끝
}
