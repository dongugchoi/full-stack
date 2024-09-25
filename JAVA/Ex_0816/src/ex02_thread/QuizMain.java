package ex02_thread;

public class QuizMain {
	public static void main(String[] args) {

		QuizThread qt = new QuizThread();
		qt.start();
		qt.startGame();
		
	}
}

