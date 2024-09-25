package ex02_scanner;

import java.util.Scanner;


public class Ex01_Scanner {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
//		System.out.print("나이를 입력해주세요 :");
//		int age = scan.nextInt();
//		
//		System.out.printf("제 나이는 %d세 입니다.\n",age);
//		System.out.println("------------------------");
		
		System.out.print("이름을 입력해주세요 : ");
		String name = scan.next();
		
		System.out.print("나이를 입력해주세요 : ");
		int age1 = scan.nextInt();
		
		
		// nextLine()은 엔터가만나면 끝나기때문에 나이를입력받고 엔터를치면 끝나기에 한번 더 작성해준다. 26줄참고
		System.out.print("주소를 입력해주세요 : ");
		scan.nextLine();
		String add = scan.nextLine();
		
		System.out.println("키(신장)를 입력해주세요 :");
		double height = scan.nextDouble();
		
		System.out.printf("제 이름은 %s 입니다.\n",name);
		System.out.printf("제 나이는 %d 입니다.\n",age1);
		System.out.printf("제 주소는 %s 입니다.\n",add);
		System.out.printf("제 키는 %.1fcm입니다.\n",height);
	}

}
