package ex01_file;

import java.io.File;

public class Ex03_File {

	public static void main(String[] args) {
		///aaa,bbb의 경우 실제 있는 경로가 아님
		String path = "D:\\web0900_cdu\\1.java\\work/aaa/bbb";
		
		File f = new File(path);
		
		//최종목적지가 파일이든 폴더든간에 아예 존재하지가 않음
		//exists() -> 최종 목적지 까지 가는 길에 없으면 false
		if(f.exists() == false) {
			System.out.println("폴더생성");
			//mkdir() -> 한개의 폴더를 만들어주는 메서드
			//mkdirs() -> 복수(여러개)의 폴더를 만들어주는 메서드
			f.mkdirs();
		}
		
		
		//파일클래스의 세번째 기능
		//목적지까지 경로가 존재하는지 파악가능
		//폴더를 만드는것이 가능하다.
		
		//파일클래스는 특정문서를 만드는 기능은 없다.
		//폴더를 만드는것 까지만 가능하다.
		
		//파일클래스의 역할
		//경로의 검증(존재하냐 존재하지 않냐, 파일이냐, 폴더냐, 파일의 이름 가져오기)
	}
	
	
	
}
