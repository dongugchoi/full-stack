package ex03_test;


interface Person{
	
}

class Student implements Person{
	
}

class Worker{
	
}

// Person인터페이스를 구현한 클래스만 제네릭 타입으로 들어올 수 있다.
class School<T extends Person>{
	
}

public class Ex02_Generic {
	public static void main(String[] args) {
		//Worker 클래스는 Person인터페이스를  상속받고 있지않기때문에 제네릭타입으로 불가능
		//School<Worker> s = new School<>();
		School<Student> s = new School<>();
	}
}
