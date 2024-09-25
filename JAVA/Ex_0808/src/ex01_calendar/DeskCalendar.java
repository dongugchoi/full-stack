package ex01_calendar;


//Calendar 클래스 상속
public class DeskCalendar extends Calendar {
		//xx색 달력을 벽에 걸기 위해 고리가 추가로 필요하다
		//라고 출력되는 info메서드 오버라이딩 하기
	
		//xx색 달력을 책상에 세울 수 있습니다 라고 출력되는
		//onTheDesk 메서드만들기
	
		public DeskCalendar(String Color, int months) {
			super(Color,months);
		}
		
		@Override
		public void info() {
		System.out.printf("%s색 달력을 벽에 걸기 위해 고리가 추가로 필요합니다.\n",Color);
		}
		
		public void onTheDesk() {
			System.out.printf("%s색 달력을 책상에 세울 수 있습니다.",Color);
		}
}
