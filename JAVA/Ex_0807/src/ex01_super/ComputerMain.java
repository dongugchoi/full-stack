package ex01_super;

public class ComputerMain {
	public static void main(String[] args) {
		Samsong s = new Samsong();
		s.PowerOn();
		s.powerOff();
		
		Computer c = new Computer();
		c.PowerOn();
		c.powerOff();

	}
}
