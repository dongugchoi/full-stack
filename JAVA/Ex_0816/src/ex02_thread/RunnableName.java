package ex02_thread;

public class RunnableName {
	public static void main(String[] args) {
		Runnable task = () ->{
			
		};
		
		
		Thread myThread = new Thread(task);
		myThread.setName("러너블 스레드");
		String name = myThread.currentThread().getName();
		System.out.println(name);
		myThread.start();
		
		
		
	}
}
