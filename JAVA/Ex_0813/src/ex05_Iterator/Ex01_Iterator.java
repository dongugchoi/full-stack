package ex05_Iterator;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class Ex01_Iterator {
	public static void main(String[] args) {
		//반복자(Iterator)
		//Iterator는 List컬렉션에서 제공하는 인터페이스로 사전적인 의미로는
		//'반복하다'라는 뜻을 지니고 있다.
		//List 컬렉션의 요소를 순회하여 하나씩 추출하는데 사용한다.
		//반복자라고도 불리는 Iterator객체는 선언된 컬렉션 객체에서 가져와 사용된다.
		
		List<Integer> list = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
		
		Iterator<Integer> iter = list.iterator();
		
		int count = 0;
		
		//향상된 for문을 기반으로 한다.
		//처음부터 끝날때까지 작동한다.
		
		while(iter.hasNext()) {
			int val = iter.next();
			System.out.printf("list 데이터 [%d] : %d\n", count++,val);
		}
		
		Set<Integer> set = new HashSet<Integer>();
		
		for(int i = 0; i <= 10; i++) {
			set.add(i);
		}
		
		Iterator<Integer> iter2 = set.iterator();
		count = 0;
		while(iter2.hasNext()) {
			int val = iter2.next();
			System.out.printf("set데이터[%d] : %d\n",count++,val);
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
}
