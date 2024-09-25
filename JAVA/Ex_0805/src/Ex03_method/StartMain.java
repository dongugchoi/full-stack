package Ex03_method;

import java.util.Scanner;

public class StartMain {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		Start  n = new Start();
		
		while(true) {
			System.out.print("정수를 입력하세요 : ");
			int rn = sc.nextInt();
			if(n.check(rn).equals("정답!")) {
				System.out.println(n.count+"회 만에 정답");
				break;
			}else {
				System.out.println(n.check(rn));
				n.count++;
			
		}
			
		}
		
	}

}
