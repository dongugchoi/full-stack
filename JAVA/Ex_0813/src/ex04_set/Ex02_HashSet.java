
package ex04_set;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class Ex02_HashSet {
public static void main(String[] args) {
		//1. 순서가 없다.
		//2. 중복되는 값이 안들어간다.
		
		//HashSet을 선언한 후
		//1 ~45사이의 난수를 생성하여 로또번호 뽑기
	Set<Integer> lotto = new HashSet<>();
	
	while(true) {
		int r = new Random().nextInt(45) +1;
		lotto.add(r);
		
		if(lotto.size() == 6) {
			break;
		}
	}
	System.out.println(lotto);
	
	
	//Set -> 배열로 바꾸기
	//new Integer[0] -> 배열의 방 개수를 0으로 하면 set이 add해둔 방 개수만큼
	//자동으로 배열의 index가 생성된다.
	Integer[] arr = lotto.toArray(new Integer[0]);
	for(int i = 0; i < arr.length; i++) {
		System.out.print(arr[i]+" ");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	} // main 의 끝
}
