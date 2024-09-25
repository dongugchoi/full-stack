package Ex03_array;

import java.util.Random;
import java.util.Scanner;

public class Ex04_array {

	public static void main(String[] args) {
		//10개의 정수를 담을 수 있는 배열의 생성
		//배열의 이름은 numbers
		
		//배열에 Random클래스를 이용하여 1~30사이의 난수 넣기
		
		//배열의 모든 요소 출력하기 (가로)
		
		//배열 안에서 짝수의 합 구하기
		
		int[] numbers = new int[10];
		
		Random r = new Random();
		
		int sum = 0;
		
		for(int i = 0; i < numbers.length; i++) {
			int rnd = r.nextInt(30)+1;
			numbers[i]=rnd;
			System.out.print(numbers[i]+" ");
			if(numbers[i]%2==0) {
				sum+=numbers[i];
			}//if의 끝-

		}//for i의 끝
		System.out.println();
		System.out.println("짝수의 합: " +sum);
		
		//배열에서 영문자만 추출하여 이어붙여 출력하기
		char[] cards = {'1','L','2','O','3','V','E','4'};
		String myWord ="";
		
		//배열의 전체를 순회하는 반복문
		for(int i =0; i<cards.length; i++) {
			if(cards[i]>=65) {
				myWord+=cards[i];
			}
		}
		System.out.println(myWord);
		
		//출력결과
		//Love
		
		//배열 arr에 담겨있는 모든 값의 합을 구하세요
		int [] arr = {10,20,30,40,50};
		int total = 0;
		for(int i=0; i<arr.length; i++) {
			total+=arr[i];
		}
		
		System.out.println(total);
		
		//다음조건에 맞는 문제를 풀어보세요
		//-키보드에서 배열의 길이를 입력받는다.
		//-입력받은 길이만큼 알파벳을 넣고 출력한다.
		//ex) 배열의 길이를 입력하세요 : 5
		//ABCDE
		
//		Scanner sc = new Scanner(System.in);
//		
//		System.out.print("배열의 길이를 입력하세요 :");
//		
//		char [] len = new char[sc.nextInt()];
//		char c = 'A';
//		
//		for(int i = 0; i<len.length; i++) {
//			System.out.print(len[i] = c++);
//		}
		
		//동전의 개수 구하기
		
		//10~5000사이의 난수를 변수에 담는다.
		//1의 자리는 반드시 0이 되어야 합니다.
		//발생된 난수를 각 동전으로 바꾸면 몇개씩 필요한지 판단하는 코드 작성
		//가능한 적은 수의 동전을 사용하도록 한다.
		//4,170원
		//500원:8개
		//100원:1개
		//50원:1개
		//10원2개
		
		Random rnd = new Random();
		int money = (rnd.nextInt(500)+1)*10;
		
		System.out.println("금액 : "+ money+"원");
		
		int [] coin = {500,100,50,10};
		
		for(int i =0; i< coin.length; i++) {
			int won = money/coin[i]; //동전의 개수
			money %= coin[i];//잔돈
			System.out.printf("%d원 : %d개\n",coin[i],won);
		}
		
		//로또번호 생성하기
		//1~45사이의 난수를 발생시켜 로또번호를 배열에 저장하고
		//출력하기
		
//		내가푼문제
//		int [] lotto = new int[6];
//	
//		for(int i=0; i<lotto.length; i++) {
//			int lt = rnd.nextInt(45)+1;
//				for(int j=0; j < i;j++ ) {
//					if(lotto[i] == lotto[j]) {
//						i--;
//						break;
//					}
//				}
//		}
	
		int [] lotto = new int[6];
		
		outer:for(int i = 0; i < lotto.length;) {
			lotto[i] = rnd.nextInt(45)+1;
			for(int j = 0; j < i; j++) {
				if(lotto[i] == lotto[j]) {
					continue outer;
				}// if문
			} // j for문
			
			System.out.print(lotto[i]+" ");
			i++;
		}// i for문
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	}//main 의 끝

}
