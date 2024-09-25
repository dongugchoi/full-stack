package ex03_operator;

import java.util.Scanner;

public class Ex08_Operator {
	public static void main(String[] args) {
		
		//과수원에서 배, 사과, 오렌지를 하루에 각각 5, 7, 5개씩 생산한다.
		//1. 과수원에서 하루에 생산되는 과일의 총 개수를 구하기
		//2. 시간당 총 생산량 구하기
		Scanner scan = new Scanner(System.in);
		
		int pear = 5;
		int apple = 7;
		int orange = 5;
		
		int total = pear + apple + orange;
		
		System.out.println("하루에 생산되는 과일의 총 개수 : " + total);
		
		double hours = (double)total/24;
		
		System.out.printf("시간당 총 생산량 : %.1f\n",hours);
		
		
		//상자 하나에는 농구공이 5개가 들어갈 수 있다.
		//만일 농구공이 23개라면 몇개의 상자가 필요한가?
		
		int n = 5;
		
		int ball = 36;
		
		int box = ball % n == 0  ? ball / n : ball / n +1  ; 

		System.out.println(box);
		
		
		//국어, 영어, 수학에 대한 점수를 키보드를 이용해 정수로 입력받고
		//1. 세 과목에 대한 합계 출력하기
		//2. 평균 출력하기 (합계 / 3.0)
		//3. 세 과목의 점수와 평균을 가지고 합격 여부를 처리하는데
		//세 과목의 점수가 각각 40점 이상이면서 평균이 60점 이상일 때 합격
		//아니면 불합격
		
		System.out.println("국어 점수를 입력해주세요 :");
		double korean = scan.nextDouble();
		
		System.out.println("수학 점수를 입력해주세요 :");
		double math = scan.nextDouble();
		
		System.out.println("영어 점수를 입력해주세요 :");
		double eng = scan.nextDouble();
		
		double total1 = korean + math + eng;
		System.out.printf("세 과목의 합계는 %.1f점 입니다.\n",total1);
		
		double avg = total1/3;
		System.out.printf("세 과목의 평균은 %.1f점 입니다.\n", avg);
		
		String pass = korean >=40 && eng >=40 && math>=40 && avg>=60 ? "합격" : "불합격";
		System.out.printf("당신은 %s 입니다.",pass);
		
		
		
	}
}
