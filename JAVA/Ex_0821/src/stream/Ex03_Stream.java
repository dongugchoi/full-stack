package stream;

import java.util.Random;
import java.util.stream.IntStream;

public class Ex03_Stream {
	public static void main(String[] args) {

		//특정 범위의 정수를 요소로 갖는 스트림 생성하기
		IntStream intStream1 = IntStream.range(1, 5); // 1,2,3,4
		IntStream intStream2 = IntStream.rangeClosed(1, 5); // 1,2,3,4,5

		//난수를 요소로 갖는 스트림 생성하기
		IntStream intStream3 = new Random().ints(); // 무한 스트림
		intStream3.limit(5).forEach(System.out::println); // 5개의 요소만 출력한다.

		IntStream intStream4 = new Random().ints(5); // 크기가 5인 난수 스트림을 반환
	
		int total = 0;
		for(int i = 1; i <= 10; i++) {
			total += i;
		}
		System.out.printf("1~10까지의 합 : %d\n",total);
		
		int total2 = IntStream.rangeClosed(1, 10).sum();
		System.out.printf("1~10까지의 합 : %d\n",total2);

	

	}
}
