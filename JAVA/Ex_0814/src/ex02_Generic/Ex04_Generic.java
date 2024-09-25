package ex02_Generic;

import java.util.ArrayList;
import java.util.LinkedList;

public class Ex04_Generic {
	public static void main(String[] args) {
		//문자열데이터를 저장하는
		//LinkedList 객체를 저장할 수있는 ArrayList
		ArrayList<LinkedList<String>> list = new ArrayList<>();
		
		
		LinkedList<String> node1 = new LinkedList<>();
		node1.add("aa");
		node1.add("bb");
		

	    LinkedList<String> node2 = new LinkedList<>();
	    node2.add("11");
	    node2.add("22");

	    list.add(node1);
	    list.add(node2);
	    System.out.println(list);
	}
	
}
