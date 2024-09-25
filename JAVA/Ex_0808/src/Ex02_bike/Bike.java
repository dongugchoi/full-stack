package Ex02_bike;

public class Bike {
	String riderName;
	int wheel = 2;
	
	public Bike(String riderName) {
		this.riderName = riderName;
	}// 생성자의 끝
	
	public void info() {
		System.out.println(riderName+"의 자전거는 " + wheel +"발 자전거입니다.");
	}
	
	public void ride() {
		System.out.println("씽씽");
	}
}// bike 클래스의 끝
