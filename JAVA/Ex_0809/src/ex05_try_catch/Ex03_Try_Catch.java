package ex05_try_catch;

import java.util.Scanner;

//키보드에서 정수를 입력받도록 하고, 정수 이외의 값이 입력되었다면
//"정수만 입력 가능" 이라는 메세지 출력하기

public class Ex03_Try_Catch {
public static void main(String[] args) {
	

	Scanner sc = new Scanner(System.in);
	
	try {
		System.out.println("정수 입력 : ");
		int a = sc.nextInt();
		
		System.out.print("입력받은 정수는 "+a+" 입니다.");
	}catch(Exception e) {
		String s = sc.nextLine();
		System.out.println( s +" 은(는) 정수가 아닙니다.");
	}
	
//		System.out.print("정수입력 : ");
//		Scanner sc= new Scanner(System.in);
//		String str = "";
//		
//		try {
//			int n = sc.nextInt();
//			str = sc.next();
//			int num = Integer.parseInt(str);
//			System.out.println("결과 : " + num);
//		} catch (Exception e) {
//			String name = sc.nextLine();
//			System.out.println(name + "은(는) 정수가 아닙니다.");
//		}		
//		
	
	
	}
}