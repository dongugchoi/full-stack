package Ex03_method;

import java.util.Random;

//start 클래스를 생성하고 1~50사이의 난수를 발생시킨다.
//StartMain클래스를 만들고 사용자가 키보드를 통해 정수를 입력받는다.
//Start클래스에서 사용자가 입력한 숫자를 판단하여 발생한 난수보다 크다면 Down! 작다면 Up!을 출력
//사용자가 입력한 숫자와 발생한 난수가 같을경우 프로그램을 종료시키며 몇회만에 정답을 맞추는지 카운트하기.


public class Start {
	Random rnd = new Random();
	
	int rnum = rnd.nextInt(50)+1;
	int count = 1;
	
	 String check(int rn) {
		if(rnum == rn) {
			return "정답!";
		}else if(rn > rnum) {
			return "Down!";
		}else if(rn < rnum) {
			return "Up!";
		}else {
			return "잘못 입력";
		}
	}
	
	
	
	
}
