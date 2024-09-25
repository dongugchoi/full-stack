package ec07_class_catsing;

class Car{};
class Bus extends Car{};
class SchoolBus extends Bus{
	int window =  4;
};

class OpenCar extends Car{};
class SportCar extends OpenCar{};

public class class_casting {
	public static void main(String[] args) {
		Car c1 = new SchoolBus(); // 1차 상속관계가 아니더라도 자동 타입 변환이 가능하다
		Bus b1 = new Bus();
		Bus b2 = new SchoolBus();
		
		SchoolBus sb = new SchoolBus();
		System.out.println("창문의 개수 : " + sb.window);
//		System.out.println("창문의 개수 : " + b2.window);
		
		Car c2 = new OpenCar();
		OpenCar oc = new SportCar();
		
//		Bus b3 = new OpenCar();  //상속관계가 아님
//		Bus b4 = new SportCar(); // 상속관계가 아님

//타입을 부모 타입으로 변환한 객체는 더이상 자신의 클래스에 부모 클래스와 별개로 추가한 멤버 사용 못함
//부모 클래스에 선언된 멤버만 사용 가능
//단, 부모 클래스의 메서드를 오버라이딩 한 경우 메서드의 경우에는 자식 객체의 것을 호출 할 수 있다.
		
		//어떻게 타입변환을 해도 오버라이딩된 메서드가 호출이 될까?
		//메서드가 실행 시점에서 성격이 결정되는 동적바인딩 때문이다.
		//프로그램의 컴파일 시점에는 실행되는 메서드가 
		//부모클래스의 것인지 하위클래스의 것인지 알기 어렵다.
		//실행 시점에 동적 바인딩이 일어나 부모가 자식 클래스의 멤버함수를 접근하여 실행할 수 있다.
		
		//동적바인딩의 작동
		//1. 클래스 계층구조
		//- 자바에서 동적바인딩은 클래스 계층 구조에서 발생한다.
		//- 상속하거나 인터페이스를 구현함으로써 계층을 갖는다.
		//- 이 계층에서 메서드 오버라이딩이 가능하기 때문이다.
		
		//메서드 오버라이딩
		//자식 클래스는 부모 클래스의 메서드를 재정의(오버라이딩)할 수 있다.
		//이 때, 자식 클래스에서 부모 클래스의 동일한 이름과 
		//시그니처(함수명,매개변수 개수, 매개변수의 자료형)를 가진 메서드를 재정의한다.
		
		//실행시 동적 바인딩
		//객체가 생성되고 메서드가 호출될 때, 실제로 실행될 메서드는 객체의 실제 타입에 따라 결정된다.
		//메서드 호출시 객체의 클래스 타입을 기반으로 어떤 메서드를 호출할지 동적으로 결정된다.
		
		
		
	}
}
