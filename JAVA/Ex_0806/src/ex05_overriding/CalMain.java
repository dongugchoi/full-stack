package ex05_overriding;

public class CalMain {
	public static void main(String[] args) {
		
		CalPlus plus = new CalPlus();
		CalMinus minus = new CalMinus();
		
		System.out.println("CalPlus : " +plus.getResult(15, 15));
		System.out.println("CalMinus : "+minus.getResult(30, 15));
	
		
	}
}
