package ex03_test;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Ex01_work {
	
	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<String>();
		Scanner sc = new Scanner(System.in);
		
		
		outer :while(true) {
			System.out.print("아이디 생성 : ");
			String id = sc.next();
			
			if(list.size() > 3) {
				System.out.println("4개까지만 만들 수 있습니다.");
				System.out.println("현재 만들어진 ID : "+ list);
				break;
			}
			
//			if(list.contains(id)) {
//				System.out.println();
//				continue;
//			}
		
		
		 for(int i = 0; i < list.size(); i++) {
			if(id.equals(list.get(i))) {
				System.out.println("중복된 아이디");
				continue outer;
				}
			}	
		 list.add(id);
		 
		}
		
		
		
		
		
//		for(int i = 0; i < 4; i++) {
//			System.out.println("아이디 생성 : ");
//			String id = sc.next();
//			list.add(id);
//			System.out.println(list);
//		}
//		System.out.println("프로그램 종료");
		
//		while(true) {
//			System.out.print("아이디 생성 : ");
//			String id = sc.next();
//			list.add(id);
//			System.out.println(list);
//
//			if(list.size() > 3) {
//				System.out.println("프로그램 종료");
//				break;
//			}
			
			
			
			
		

		
		
	
		
		
	}
}
