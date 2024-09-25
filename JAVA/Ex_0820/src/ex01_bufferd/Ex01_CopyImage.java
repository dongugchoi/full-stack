package ex01_bufferd;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class Ex01_CopyImage {
	public static void main(String[] args) {
		
	
	FileInputStream readFile = null;
	BufferedInputStream bis = null;
	
	FileOutputStream writeFile = null;
	BufferedOutputStream bos = null; 
	
	try {
		System.out.println("기본 스트림으로 복사 시작");
		readFile = new FileInputStream("D:\\web0900_cdu\\1.java\\work/wall.jpg");
		writeFile = new FileOutputStream("D:\\web0900_cdu\\1.java\\work/wall_copy3.jpg");
		
		int read = 0;
		
		long start = System.currentTimeMillis();
		System.out.println("이미지 복사 시작1");
		while((read = readFile.read())!= -1) {
			writeFile.write(read);
		}
		System.out.println("이미지 복사 종료1");
		long end = System.currentTimeMillis();
		long time = (end - start)/10000;
		
		System.out.println("소요 시간 : " + time + "초");
		System.out.println("기본 스트림으로 복 종료");
		
		readFile.close();
		writeFile.close();
		
		System.out.println("보조 스트림으로 복사 시작");
		
		readFile = new FileInputStream("wall.jpg");
		writeFile = new FileOutputStream("wall_copy.jpg");
		
		bis = new BufferedInputStream(readFile);
		bos = new BufferedOutputStream(writeFile);
		
		start = System.currentTimeMillis();
		System.out.println("이미지 복사 시작2");
		while(bis.read() != -1) {
			//이미지 쓰기
			bos.write(read);
		}
		
		System.out.println("이미지 복사 종료2");
		end = System.currentTimeMillis();
		double result = (double)(end-start)/1000;
		
		System.out.println("소요 시간 : " + time+"초");
		System.out.println("보조 스트림으로 복사 종료");
		

	} catch (Exception e) {
		// TODO: handle exception
	} finally {
		try {
			if(bis != null) {
				bis.close();
			}
			if(readFile != null) {
				readFile.close();
			}
			
			if(bos != null) {
				bos.close();
			}
			if(writeFile != null) {
				writeFile.close();
			}
			
		} catch (Exception e2) {
			// TODO: handle exception
		}
		
		}
	}
}
