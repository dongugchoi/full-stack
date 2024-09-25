package ex01_calendar;

public class Calendar {
	//달력의 색깔
	//개월수를 필드로 갖는다.
	
	String Color;
	int months;
	
	//필드는 생성자를 통해 초기화 한다.
	public Calendar(String Color, int months) {
		this.Color = Color;
		this.months = months;
	}
	
	
	//xx색 달력은 xx월 까지 있습니다 라고 출력이되는 info 함수 만들기
	//xx색 달력을 벽에 걸 수 있습니다 라고 출력되는 hanging 메서드 만들기
	
	public void info() {
		System.out.printf("%s색 달력은 %d월 까지 있습니다.\n",Color,months);
	}
	
	public void hanging() {
		System.out.printf("%s색 달력을 벽에 걸 수 있습니다.\n",Color);
	}
}
