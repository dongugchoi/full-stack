package ex02_list;

import java.util.ArrayList;
import java.util.List;

public class Ex01_ArrayList {
	public static void main(String[] args) {
		//리스트 선언
		List<String> list = new ArrayList<>();
		
		//리스트에 데이터 추가하기
		list.add("딸기");
		list.add("바나나");
		list.add("망고");
		
		//리스트 출력
		System.out.println("리스트 내용1 : " + list);
		
		//3번째 위치에 삽입
		//특정위치에 삽입
		list.add(2,"수박");
		
		System.out.println("리스트 내용2 : " + list);
		
	}
}
