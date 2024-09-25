package ex03_anonymouss_class;

public class PersonMain {
	public static void main(String[] args) {
		Person s = new Student();
		s.mySelf();
		                                  
		//만약 person을 상속받아 처리해야하는 클래스 또 필요하긴 하지만
		//한번만 사용하고 말거라면 굳이 상속받는 클래스를 또 만들 필요가 있을까?
		
		//회사원
		Person w = new Person() {
			//익명클래스
			@Override
			public void mySelf() {
				System.out.println("나는 회사원 입니다.");
			}
		};
		
		w.mySelf();
		
	}
}
