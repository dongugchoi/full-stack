package ex01_getter_setter;

public class PersonMain {
	public static void main(String[] args) {
		Person hong = new Person();
//		hong.age = -30;
		
		hong.setAge(-30);
		hong.setAge(30); // age필드에 30대입
		System.out.println("hong의 나이는 " + hong.getAge() + "세 입니다.");
	}
}
