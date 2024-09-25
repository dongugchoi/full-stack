package ex02_class;

public class FamilyMain {

	public static void main(String[] args) {
		Family father = new Family();
		Family son = new Family();
		
		//정적멤버의 호출
		//클래스명.필드
		//클래스명.메서드명();
		Family.address ="인천";
		System.out.println(son.address);
		System.out.println(father.address);
		
		
	
	
	
	}
	

}
