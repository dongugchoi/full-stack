package ex05_abstract;

public abstract class Receipt {
	String chef;
	
	public Receipt(String chef) {
		this.chef = chef;
	}
	
	void info() {
		System.out.println("이 레시피는 " + chef+"님의 레시피입니다.");
	}
}
