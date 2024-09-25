package ex08_interface;

public class PineApplePhone implements Phone{
	//인터페이스를 구현하는 클래스에 모든 추상메서드를 구체화 해야 한다.
	
	//배터리양
	int batteryCapcity = 40;
	boolean isOn = false;
	
	@Override
	public void powerOn() {
		if(batteryCapcity > 30) {
			System.out.println("@@@Power On!!@@@");
			isOn = true;
		}else {
			System.out.println("Low Battery...");
		}
		
	}

	@Override
	public void powerOff() {
		System.out.println("@@@Power Off!!@@@");
		isOn = false;
		
	}

	@Override
	public boolean isOn() {
		if(isOn) {
			return true;
		}else {
			return false;
		}
	}

	@Override
	public void watchUtube() {
		if(batteryCapcity > 10) {
			System.out.println("--- watching Utube ---");
			batteryCapcity -= 10;
			System.out.println("batter is..." + batteryCapcity+ "%");
		}else {
			System.out.println("Low Battery...");
			powerOff();
		}
		
	}

	@Override
	public void charge() {
		if(batteryCapcity < Phone.MAX_BATTERY_CAPACITY - 20) {
			System.out.println("---charging---");
			batteryCapcity += 5;
			System.out.println("Charged..."+batteryCapcity+"%");
		}else {
			System.out.println("You don't have to charge...");
			System.out.println("It's enough..."+batteryCapcity+"%");
		}
	
	}
}
