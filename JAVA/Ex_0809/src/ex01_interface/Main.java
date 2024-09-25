package ex01_interface;

public class Main {
	public static void main(String[] args) {
		//Point를 상속받아 색을 가진 점을 나타내는 ColorPoint클래스 작성하기
		//Main메서드를 실행한 결과는 다음과 같다.
		ColorPoint cp = new ColorPoint(5,5,"Yellow");
		cp.setXY(10,20);
		cp.setColor("Red");
		String str = cp.toString();
		System.out.println(str+"입니다.");
	}
}
