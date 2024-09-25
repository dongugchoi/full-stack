package ex01_switch;

public class Ex04_Switch {
	public static void main(String[] args) {
		//java12버전 이상의 switch문
		//조건에 복수의 값을 사용하는 것이 가능해졌다.
		//화살표 표현식을 이용하는게 가능하다
		//기존 switch문과 달리 case에 해당하는 명령만
		//실행되고, 그 이후 case들은 실행되지 않는다.
		
		String day = "MONDAY";
		
		switch(day) {
		case "MONDAY":
		case "TUESDAY":
		case "WENSDAY":
		case "THURSDAY":
		case "FRIDAY":
			System.out.println("평일");
			break;
		case "SATURDAY":
		case "SUNDAY":
			System.out.println("주말");
			break;
			default:
				System.out.println("잘못된 입력입니다.");
		}

		//자바12 이상에서의 switch문
		switch(day) {
		case "MONDAY","TUESDAY","WENSDAY","THURSDAY","FRIDAY" -> System.out.println("평일");
		case "SATURDAY","SUNDAY" -> System.out.println("주말");
		default -> System.out.println("잘못된 입력입니다.");
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
}
