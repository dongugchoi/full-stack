package ex02_inputstream;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class Ex04_FileInputStream {
	public static void main(String[] args) {
		//특정 경로에 file.txt문서를 만들고 아무 문장이나 입력해둔다.
		//file.txt의 내용을 읽어온 뒤, 회문인지 아닌지 판별해서 출력하시오
		
		String fath = "D:\\web0900_cdu\\1.java\\work/test1.txt";
		File f = new File(fath);
		byte[] read = new byte[(int)f.length()];
		FileInputStream fis = null;
		
		if(f.exists()) {
			try {
				fis = new FileInputStream(f);
				
				fis.read(read);
				
				String ori = new String(read);
				String rev = "";
				
				for(int i  = ori.length()-1; i>=0; i--) {
					rev+=ori.charAt(i);
				}
				if(ori.equals(rev)) {
					System.out.print(ori + "는 회문수입니다");
				} else {
					System.out.print(ori + "는 회문수가 아닙니다");
				}
			   fis.close();
				
			} catch (Exception e) {
				// TODO: handle exception
			}
		}
	
		
		
	}
}
