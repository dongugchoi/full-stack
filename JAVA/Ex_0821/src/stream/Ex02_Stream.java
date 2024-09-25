package stream;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Stream;

public class Ex02_Stream {

	public static void main(String[] args) {

		//Set 컬렉션 생성
		Set<String> set = new HashSet<>();
		set.add("홍길동");
		set.add("신용권");
		set.add("김미나");
		
		//Stream을 이용한 요소 반복 처리
		Stream<String> stream = set.stream();
		stream.forEach(System.out::println);
		
		//Stream은 Iterator와 비슷한 반복자이지만, 다음과 같은 차이점을 가지고 있다.
		//1) 내부 반복자이므로 처리 속도가 빠르고 병렬처리에 효율적이다.
		//2) 람다식으로 다양한 요소 처리를 정의할 수 있다.
		//3) 중간 처리와 최종 처리를 수행하도록 파이프 라인을 형성할 수 있다.

		ArrayList<String> names = new ArrayList<String>();
		names.add("홍길동");
		names.add("신용권");
		names.add("김자바");
		names.add("람다식");
		names.add("김미나");
		
		Stream<String> Stream = names.stream();
		stream.forEach(System.out::println);
		
		stream.forEach(System.out::println);
	}
	
}
