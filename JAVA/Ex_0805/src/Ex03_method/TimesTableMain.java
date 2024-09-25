package Ex03_method;

import java.util.Scanner;

public class TimesTableMain {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		TimesTable time = new TimesTable();
		
		System.out.print("구구단의 단을 입력하세요 :");
		int num = sc.nextInt();
		

		time.showTable(num);
		
				

	}

}
