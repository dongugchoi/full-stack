package ex01_lamda;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.function.Consumer;

public class Ex03_lamda {
	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList(Arrays.asList("이름1", "이름2", "이름3", "이름4", "이름5"));
		System.out.println(list.toString());
		
		for(String s : list) {
			System.out.print(s + " ");
		}
		System.out.println();
		
		//void accept(T t)
		//t -> System.out.println(t);
		//System.out::println
		//람다식을 받아서 무엇을 하고싶은지 반환해주는 메서드 forEach
		Consumer<String> print = t -> System.out.print(t+" ");
		list.forEach(print);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}

}
