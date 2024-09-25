package ex04_Reader;

import java.io.FileWriter;

public class Ex03_Writer {

		public static void main(String[] args) {


			try{
			FileWriter fw = new FileWriter("D:\\web0900_cdu\\1.java\\work/fileWriter예제.txt");
			
			
				fw.write("첫번째 줄 작성합니다 hehehe");
				fw.write("\n");
				fw.write("두번째 줄도 문제없지 hehehe");
				fw.write("\n");
				System.out.println("작성완료");
				
				fw.close();

			} catch ( Exception e) {
				e.printStackTrace();
			}
		}
	}

