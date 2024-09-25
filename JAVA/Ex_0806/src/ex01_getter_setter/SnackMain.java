package ex01_getter_setter;

public class SnackMain {

	public static void main(String[] args) {
		
		Snack chip = new Snack(5000); // 객체 생성 및 초기화
//		chip.price = 2000;
		chip.info(); // 객체 메서드 호출
		
		//객체마다 필요한 정보가 다를 때 생성자를 통해서 데이터를 전달받으면
		//객체를 생성하는 것이 더 효율적일 수 있다.
		Snack potatoChip = new Snack(1000);
		Snack popcorn = new Snack(3000);
		
		//일반적인 메서드와 마찬가지로 매개변수를 두 개이상 설정할 수있다.
		
	}

}

