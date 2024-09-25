package ex03_anonymouss_class;

//Person의 개념을 확장하기 위해 자식 클래스를 만들어서 사용한다.
public class Student extends Person{
	@Override
	public void mySelf() {
		System.out.println("I'm child");
	}
}
