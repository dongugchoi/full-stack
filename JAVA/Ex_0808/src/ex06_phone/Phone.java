package ex06_phone;
		//추상클래스선언
public abstract class Phone {
	//추상메서드선언
	abstract public void openingLogo();
	
	public void powerOn() {
		openingLogo();
		System.out.println("핸드폰이 켜집니다.");
	}
	
	public void powerOff() {
		openingLogo();
		System.out.println("핸드폰이 꺼집니다.");
	}
}
