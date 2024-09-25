package Ex03_method;

import java.util.Arrays;

public class MethodTest {
	//배열의 최대값을 찾아 출력하는 maxFinder메서드 작성하기
	//배열은 매개변수로 전달받는다.
	
	void maxFinder(int[] arr) {
//		for(int i =0; i < a.length; i++) {
//			int max = a[0];
//			int min = a[0];
//			
//			if(a[i] > max) {
//				max = a[i];
//			}else if(a[i] < min) {
//				min = a[i];
//			}
		Arrays.sort(arr);//오름차순 정렬
		System.out.println("최대값 :" + arr[arr.length-1]);
		
			
//	}// for 끝
//		System.out.println("최대값 : " + max + "최소값 :" + min);
 }// maxFinder 메서드 끝
	
}// methodTest 클래스 끝
