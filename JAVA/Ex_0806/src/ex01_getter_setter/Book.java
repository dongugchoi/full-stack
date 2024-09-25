package ex01_getter_setter;

public class Book {
	//여러개의 생성자 선언해보기
	String title = "제목없음";
	int series = 1;
	int page = 100;
	
	//기본생성자
	public Book() {
		// TODO Auto-generated constructor stub
	}
	
	//제목만 넘겨받는 생성자
	public Book(String t) {
		title =t;
	}
	
	//제목과, 페이지수를 넘겨받는 생성자
	public Book(String t, int p) {
		title = t;
		page = p;
	}
	
	//시리즈와 제목을 넘겨받는 생성자 
	//생성자 오버로딩 조건중 매개변수값이 같아도 순서가 다르면 상관없다.
	public Book(int s, String t) {
		series = s;
		title = t;
	}
	
	public void bookInfo() {
		System.out.println("제목 : " + title);
		System.out.println("시리즈 : " + series);
		System.out.println("페이지 : " + page);
		System.out.println("------------------------------");
	}
	
	
}
