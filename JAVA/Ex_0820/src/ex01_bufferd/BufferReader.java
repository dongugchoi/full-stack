package ex01_bufferd;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class BufferReader {
	public static void main(String[] args) throws IOException {
		
		BufferedReader buffer = new BufferedReader(new InputStreamReader(System.in));
		
		System.out.println("문자열 입력 : " );
		String str = buffer.readLine();
		System.out.println("입력된 문자열 : str");
		
		System.out.println("정수 입력 : ");
		int n = Integer.parseInt(buffer.readLine());

		
		//공백으로 구분된 정수 입력받기
		System.out.println("여러개 정수 입력 : ");
		String[] iArr = buffer.readLine().split("");
		System.out.println(Arrays.toString(iArr));
 	}
}
