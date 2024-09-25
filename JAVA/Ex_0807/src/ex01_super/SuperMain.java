package ex01_super;

public class SuperMain {
	public static void main(String[] args) {
		Child c = new Child(5);
		
		//자식객체를 생성하고 실행을 했는데
		//부모생성자 안에있는 명령이 실행이 됨
		
		//부모생성자 실행이 됐다는 의미이다.
		
		//
		System.out.println("money : " + c.money);
	}
}
