package ex02_inputstream;

public class Ex03_FileInputStream {
	
	public static void main(String[] args) {
		
		byte[] keyboard = new byte[100];
		
		try {
			System.out.println("값 : ");
			System.in.read(keyboard);
			
			String s = new String(keyboard).trim(); //앞뒤 공백제거 trim();
			System.out.println(s);
			
		}catch(Exception e){
			
		}//try,catch 끝
	}//main 끝
	
}//class끝
