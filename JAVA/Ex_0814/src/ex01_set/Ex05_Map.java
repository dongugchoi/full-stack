package ex01_set;

import java.util.HashMap;
import java.util.Scanner;

public class Ex05_Map {

	public static void main(String[] args) {
		
		HashMap<String, Integer> map = new HashMap<>();
		map.put("kim", 1111);
		map.put("lee", 2222);
		map.put("park", 3333);
		
		//id : aaa
		//pw : 1111
		//아이디가 존재하지않습니다.
		
		//id : lee
		//pw : 3333
		//비밀번호 불일치
		
		//id : park
		//pw : 3333
		//로그인 성공!
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("아이디 입력 : ");
		String id = sc.next();
		System.out.println("비밀번호 입력 : ");
		int pw = sc.nextInt();
		
		
		if(!map.containsKey(id)) {
			System.out.println("아이디가 존재하지 않습니다.");
			
		}else if(map.get(id) != pw) {
			System.out.println("비밀번호 불일치");
			
		}else {
			System.out.println("로그인 성공!");

		}
	
	}
	
	
}
