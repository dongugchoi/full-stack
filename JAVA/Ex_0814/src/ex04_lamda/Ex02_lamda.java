package ex04_lamda;


@FunctionalInterface
interface Iadd{
	 int add(int x, int y);
} // 인터페이스 끝
public class Ex02_lamda {
	public static void main(String[] args) {
		
		 //람다식을 메서드의 매개변수로 활용하기
		Iadd add = (x,y) -> x+y;
		
		int res = result(add);
		System.out.println("람다식 매개변수로 활용 : " + res);
		} // main의 끝
	
		public static int result(Iadd lamda) {
			return lamda.add(1, 2);
		}
	
} // 람다클래스 끝
