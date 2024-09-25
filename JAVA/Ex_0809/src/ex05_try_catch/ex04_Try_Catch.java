package ex05_try_catch;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ex04_Try_Catch {
	public static void main(String[] args) {
		//다중 catch 사용하기
		//프로그램을 구동할 때 하나의 예외만 발생한다면 어렵지 않다.
		//하지만 try구문 안에서 예외는 다양하게 발생할 수 있다.
		//만약 기존과 같은 방법으로 처리한다면 하나의 예외를 제외하고는 제대로 처리할 수 없다
		//이때, 다중 catch문을 사용하여 예외별로 
		//예외 처리 코드를 다르게 하여 다양한 예외를 처리할 수 있다
		Scanner sc = new Scanner(System.in);
		
		try {
			int [] cards = {4,5,1,2,7,8};
			System.out.print("몇 번째 카드를 뽑으시겠습니까? >>");
			
			int cardIndex = sc.nextInt();
			System.out.println("뽑은 카드 번호는 : " + cards[cardIndex]);
			
		} catch (InputMismatchException e) {
			System.out.println("잘못 입력하셨습니다. 숫자만 가능합니다.");
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println("해당 번호의 카드는 없습니다.");
		}
		
		System.out.println("프로그램 종료");
		
		
		
	}
}
