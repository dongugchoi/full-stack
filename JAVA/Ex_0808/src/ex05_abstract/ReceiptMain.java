package ex05_abstract;

public class ReceiptMain {
	public static void main(String[] args) {
		//추상크래스는 직접 객체를 생성할 수 없다.
//		Receipt r = new Receipt();
		
		PastaReceipt pr = new PastaReceipt("최연석");
		pr.info(); // 자식객체를 통해 추상클래스의 메서드를 호출할 수 있다.
		pr.makeSource();
		
		StakeReceipt sr = new StakeReceipt("이현복");
		sr.info();
		sr.grillStake();
	}
}
