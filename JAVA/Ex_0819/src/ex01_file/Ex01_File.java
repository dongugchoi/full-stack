package ex01_file;

import java.io.File;

public class Ex01_File {
	
	public static void main(String[] args) {
		//외부에서 읽어올 파일의 경로
		String path = "D:\\web0900_cdu\\1.java/test.txt\\";
		
		File f = new File(path);
		
		
		//isFile() -> 파일클래스가 접근한 최종목적지가 파일형태일 경우 true
		if(f.isFile()) {
		System.out.println(f.length()+"byte");
		//f.length() -> 목적지의 크기
		}
		//File클래스의 첫번째 기능
		//용량을 알 수 있다.
		
	}
	
	
}
