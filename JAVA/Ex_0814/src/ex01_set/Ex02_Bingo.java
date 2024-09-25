package ex01_set;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

public class Ex02_Bingo {
	public static void main(String[] args) {
		//HashSet과 ArrayList를 이용하여 5*5 랜덤 빙고판 만들기
		HashSet<Integer> set = new HashSet<>();
		int[][] bingo = new int[5][5];
		for(int i = 0; set.size() < 25; i++) {
			set.add(new Random().nextInt(50)+1);       
		}
										// 컬렉션객체 set
		List<Integer> list = new ArrayList<>(set);
		Collections.shuffle(list);
		
		Iterator<Integer> iter = list.iterator();
		
		for(int i = 0; i< bingo.length; i++) {
			for(int j = 0; j< bingo[i].length; j++) {
				bingo[i][j] = iter.next();
				System.out.printf("%02d ",bingo[i][j]);
			}
			System.out.println();
		}
		
		
	}
}
