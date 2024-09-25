package ex02_thread;

public class ThreadCount implements Runnable {
	

		private int n;
		
		public ThreadCount(int n) {
			this.n = n;
		}

			public void run() {		
			for(int i = n; i >= 0; i--){
				
				try {
					System.out.println(i);
					Thread.sleep(1000);
					
				} catch (Exception e) {            
				}
			}
			System.out.println("종료");
		
	
}

}