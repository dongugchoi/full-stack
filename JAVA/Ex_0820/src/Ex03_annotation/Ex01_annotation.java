package Ex03_annotation;

@FunctionalInterface //함수형 인터페이스
interface B{
	void method();
}

@SuppressWarnings("removal")
class A{
	@Deprecated
	public void oldOne() {
		
	}
	
	Integer i = new Integer(10);
}


public class Ex01_annotation {
	public static void main(String[] args) {
		//@Override
		//컴파일러에게 재정의하는 메서드라는것을 알린다.
		
		
		//@Deprecated 앞으로 사용되지 않을 것을 권장하는 대상에게 붙힌다.
		
		//@SuppressWarnings 경고를 무시해준다.
	}
}
