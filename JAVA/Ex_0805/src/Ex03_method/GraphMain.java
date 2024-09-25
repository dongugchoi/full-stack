package Ex03_method;

import java.util.Random;

public class GraphMain {

	public static void main(String[] args) {

		int[] num = new int[100];
		int[] count = new int[10];
		for(int i = 0; i<num.length; i++) {
			
			System.out.print(num[i] = new Random().nextInt(10));
		}
		System.out.println();
		for(int i =0; i <num.length; i++) {
			count[num[i]]++;
				}
		Graph pg = new Graph();
		for(int j=0; j< count.length; j++) {
			System.out.println(j +" 의 갯수 :" + pg.print('#', count[j]) + " " + count[j]);
		}

	}

}
