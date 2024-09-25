package ex02_thread;

class TimeThread extends Thread{
	@Override
	public void run() {
		for(int i = 0; i < 1000; i++) {
			System.out.println("스레드 출력 : " + (i+1));
			try {
				//1초간 일시정지
				Thread.sleep(1000);
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
		}
	}
	
	
	
	
	
}

public class ThreadSleepExample {
	public static void main(String[] args) {
		TimeThread tt = new TimeThread();
		tt.start();
	}
}
