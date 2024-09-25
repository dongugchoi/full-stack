package ec07_class_catsing;

class Parent{};

class Child extends Parent{};

public class casting {
	public static void main(String[] args) {
		Parent p1 = new Parent(); //Parent타입의 객체
		Child c1 = new Child(); //Child타입의 객체
		
		Parent p2 = new Child();//자동타입변환
		Parent p3 = c1; //자동타입변환
		
		int myAge = 20;
		int yourAge = myAge;
		
		myAge = 21;
		System.out.println(yourAge);
		
		//기본 자료형끼리 비교를 할 때 == 연산자는 값이 같은지 비교하지만
		//객체끼리 비교를 할 때 ==연산자는 주소값이 같은지 비교한다.
		if(p3 == p1) {
			System.out.println("p3와 c1은 같은 객체를 참조하고 있습니다.");
		}
		
		
		//타입을 변환한다고 객체가 바뀌는것이 아니라, 객체는 보존되고 사용만 부모 객체처럼한다.
		//자동타입변환은 반드시 자식 클래스의 객체를 부모타입으로 변환할때만 적용할 수 있다.
		//1차 상속관계가 아니더라도 상위 계층의 타입으로 변환할 수 있다.
		//하지만 같은 상위 계층을 가지고 있더라도, 타입 변환을 시도하려는
		//두 클래스 간의 상속 관계가 없다면 타입 변환은 불가능하다.
		
		
	}
}
