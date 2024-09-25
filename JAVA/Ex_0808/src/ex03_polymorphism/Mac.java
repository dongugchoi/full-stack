package ex03_polymorphism;

public class Mac extends Computer{
	@Override
	public void powerOn() {
		
		super.powerOn();
		System.out.println("Hello Apple");
	}

	public Mac info() {
		// TODO Auto-generated method stub
		return null;
	}

	
	
}
