package ex01_interface;

public class MicMain {
	public static void main(String[] args) {
		System.out.println("---TjMic 객체 ---");
		Tjmic tm = new Tjmic();
		tm.connect();
		tm.music();
		tm.sing();
		
		System.out.println("--- Tjmic객체를 BluetoothMIC로 타입 변환");
		BluetoothMIC bm = tm;
		bm.connect();
		bm.music();
		bm.sing();
		
		System.out.println("--- Tjmic 객체를 MicroPhone 타입으로 변환");
		MicroPhone m = tm;
		m.sing();
		// m.connect(); 호출 불가능
		// m.music(); 호출 불가능

		
		System.out.println("--- Tjmic 객체를 Speaker 타입으로 변환");
		Speaker s = tm;
		// s.sing(); 호출 불가능
		s.music();
		// s.connect(); 호출 불가능
		
	}
}
