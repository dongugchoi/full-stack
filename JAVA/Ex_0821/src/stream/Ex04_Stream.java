package stream;

import java.util.Arrays;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Ex04_Stream {
	public static void main(String[] args) {
		Integer[] nums = {1,44,33,21,36,38,68,88,4,5,6,1,1,1,2,2,2};
		
		//1.스트림 객체 만들기
		Stream<Integer> stream =  Arrays.stream(nums);
		
		//2.중간연산
		stream.distinct().sorted().limit(5).forEach(x -> System.out.print(x+" "));
		System.out.println();
		System.out.println(Arrays.toString(nums));
		
		IntStream intstream = IntStream.rangeClosed(1, 10);
		//skip(n):맨 처음 n개를 버리고 시작
		//limit(n): n개의 개수를 갖는 스트림을 반환
		intstream.skip(3).limit(5).forEach(x -> System.out.print(x+" \n"));
		
		IntStream inStream2 = IntStream.of(1,2,2,3,3,4,5,5,6,7,8,9,10);
		inStream2.distinct().filter(x -> x % 2 == 0).forEach(x -> System.out.print(x+" ")); //2 4 6 8 10
		
		System.out.println();
		Stream.of("ab","a","abc","abcd","abcdef","abcdefg").filter(x -> x.length() > 2).forEach(x -> System.out.print(x+" "));
		
	}
}
