package ex05_Bufferd;

import java.io.BufferedInputStream;
import java.io.FileInputStream;

public class Ex01_BufferedInput {
	public static void main(String[] args) {
		
		FileInputStream in = null;
		BufferedInputStream bis = null;
		
		try {
			in = new FileInputStream("D:\\web0900_cdu\\1.java\\work/test.txt");
			bis = new BufferedInputStream(in);
			
			int read = 0;
			
			//보조 스트림을 사용하면 라인 단위로 읽어올 수 있다.
			while((read  = bis.read())!= -1) {
				System.out.print((char)read);
			}
		} catch (Exception e) {
			// TODO: handle exception
		} finally {
			try {
				if(bis != null) {
					bis.close();
				}
				if(in != null) {
					in.close();
				}
			} catch (Exception e2) {
				// TODO: handle exception
			}
		}
	}
}
