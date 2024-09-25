package ex01_set;

import java.util.HashMap;
import java.util.Map;

public class Ex03_Map {
	public static void main(String[] args) {
		Map<Integer, Character> map = new HashMap<>();
		//map에 데이터 추가하기
		
		map.put(1, 'A');
		map.put(2, 'B');
		map.put(3, 'C');
		map.put(4, 'D');
		System.out.println(map);
		
		//map에서 value는 중복이 될 수 있다.
		map.put(5, 'A');
		System.out.println(map);
		
		//map에서 key는 중복될 수 없다.
		map.put(1, 'F'); // 기존에 같은 이름을 가진 key가 있다면 value를 갱신한다.
		System.out.println(map);
		
		//map에서 요소의 삭제는 key값을 통해서 한다.
		System.out.println("삭제한 값 : " + map.remove(2));
		System.out.println(map);
		
		//map의 크기
		System.out.println("map의 크기 " + map.size() );
		
		//map에서 특정 value 꺼내오기
		//value를 꺼내올때도 key를 사용한다.
		char res = map.get(1);
		System.out.println(res);
	}
	
	
}
