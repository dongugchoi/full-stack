package Ex03_array;

import java.util.Arrays;
import java.util.Scanner;

public class Ex10_multi_array {

	public static void main(String[] args) {
		// 1 ~ 25까지 2차원배열 arr에 순차적으로 넣고
		// 한줄에 다섯개씩 출력하기
		
		//01 02 03 04 05
		//06 07 08 09 10
		//11 12 13 14 15
		//16 17 18 19 20
		//21 22 23 24 25

		
//		int [][] arr = {{1,2,3,4,5},{6,7,8,9,10},{11,12,13,14,15},{16,17,18,19,20},{21,22,23,24,25}};
//		
//		for(int i = 0; i < arr.length; i++) {
//			for(int j = 0; j <arr[i].length; j++) {
//				System.out.printf("%02d ",arr[i][j]);
//			} // 첫번째 for문의 끝
//			System.out.println();
//		} // 두번째 for문의 끝
		
		int [][] arr = new int[5][5];
		
		int num = 1;
		
		for(int i = 0; i <arr.length; i++) {
			for(int j = 0; j < arr[i].length; j++) {
				arr[i][j] = num++;
				System.out.printf("%02d ", arr[i][j]);
			}
			System.out.println();
		}
		System.out.println("-------------------------------------");
		
		//로또번호 맞추기
		int [][] lotto = {{2,6,11,33,42,44},
						 {1,6,7,22,24,33},
						 {7,16,24,33,45,9},
						 {27,42,35,21,43,1},
						 {6,17,22,24,33,41}};
		
		// 키보드에서 당첨숫자를 연속으로 6개를 입력받아 myNum에 넣는다.
		String myNum = "";
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("당첨 숫자 입력 : ");
		myNum = sc.next();
		
		boolean isWin = false;

		
		//2차원배열에 들어있는 1차원배열 5개중 하나라도 완전히 일치하는
		//곳이 있으면 당첨!, 아니면 당첨되지 못했습니다.
		
		for(int i = 0; i < lotto.length; i++) {
				String lottoNumber = "";
				//하나의 일차원배열에 있는 숫자들을 문자열로 붙인다.
			for(int j = 0; j < lotto[i].length; j++) {
					lottoNumber += lotto[i][j];														
					
				} // 두번째 for문의 끝
			if(myNum.equals(lottoNumber)) {
				isWin = true;
				break;
			} //  첫번째 if문의 끝
			
			}// 첫번째 for문의 끝
		if(isWin) {
			System.out.println(myNum + " 당첨!");
		}else {
			System.out.println(myNum +" 당첨되지 않았습니다.");
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	} // main의 끝

}
