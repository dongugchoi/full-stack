package ex01_switch;

public class Ex03_Switch {

	public static void main(String[] args) {
		
		//break가 없다면 어떻게 될까?
		
		int num =1;
		
		switch(num) {
		case 1:
			System.out.println("num은 1입니다.");
		case 7:
			System.out.println("num은 7입니다.");
		default:
			System.out.println("num은 1도 7도 아닙니다.");
		}
		

	}

}
