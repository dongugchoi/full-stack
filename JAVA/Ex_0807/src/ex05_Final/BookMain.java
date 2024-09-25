package ex05_Final;

public class BookMain {
	public static void main(String[] args) {
		
		Comic comic = new Comic("포켓몬","미상", true);
		
		//final로 선언된 메서드를 오버라이드는 안돼지만 사용하려는 건 가능하다.
		comic.info_title();
		comic.info_author();
		comic.info_color();
	}
}
