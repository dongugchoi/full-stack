package ex04_falm;

class Parent{
	public void display() {
		System.out.println("부모 클래스의 display()메서드이다.");
	}
}

class Child extends Parent{
	
	//오버라이딩 된 display() 메서드
	//상속받은 메서드를 자식클래스에서 재정의한다.
	@Override
	public void display() {
		System.out.println("자식 클래스의 display()메서드이다.");
	}
	
	//오버로딩된 display()메서드
	//하나의 클래스 안에서 같은 이름의 메서드를 여러개 구현이 가능
	public void display(String str) {
		System.out.println(str);
	}
}



public class InheritanceMethodTest {
	public static void main(String[] args) {
		Child ch = new Child();
		ch.display();
		ch.display("오버로딩된 display()메서드 입니다.");
	}
}


