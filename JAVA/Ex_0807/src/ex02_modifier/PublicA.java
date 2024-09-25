package ex02_modifier;

public class PublicA {
	public int a;
	
	private PublicA(int a) {
		this.a = a;
	}
	
	public void printA() {
		System.out.println("PublicA 클래스의 printA() 메서드 호출");
	}
}
