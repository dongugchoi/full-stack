package com.example.demo.generic;

public class GenMain {
	public static void main(String[] args) {
		Gen<Integer> t1 = new Gen<>();
		t1.value = 100;
		
		Gen<String> t2 = new Gen<>();
		t2.value = "Hello";
	}
}
