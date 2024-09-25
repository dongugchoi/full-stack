package ex01_bufferd;

import java.io.FileInputStream;
import java.io.InputStreamReader;

public class Ex04_InputStreamReader {
public static void main(String[] args) {
		
		FileInputStream in = null;
		InputStreamReader is = null;
		
		try {
			in = new FileInputStream("D:\\web0900_cdu\\1.java\\work/test.txt");
			is = new InputStreamReader(in,"UTF-8");
			int read = 0;
			
			while((read = is.read())!= -1) {
				System.out.println((char)read);
			}
		} catch (Exception e) {
			// TODO: handle exception
		} finally {
			try {
				if(is != null) {
					is.close();
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
