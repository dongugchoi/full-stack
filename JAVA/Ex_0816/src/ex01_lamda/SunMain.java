package ex01_lamda;

import ex02_thread.MyThread;

public class SunMain {
	public static void main(String[] args) {
		MyThread mt = new MyThread();
		// mt.run(); run메서드를 직접 호출하지 않는다.
		mt.start();
		
	}
}
