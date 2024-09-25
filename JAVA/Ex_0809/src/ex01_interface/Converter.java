package ex01_interface;

import java.util.Scanner;

public abstract class Converter {
	
	//다음은 단위를 변환하는 Conveter 추상클래스이다.

	abstract protected double converter(double src); //추상메서드
	abstract protected String getSrcString(); // 추상메서드
	abstract protected String getDestString(); //추상메서드
	protected double ratio; //비율
	public void run() {
		Scanner sc = new Scanner(System.in);
		System.out.println(getSrcString()+"을 "+ getDestString()+"로 바꿉니다.");
		System.out.print(getSrcString()+"을 입력하세요 >>");
		double val = sc.nextDouble();
		double res = converter(val);
		System.out.printf("변환 결과 : %.2f " + getDestString()+ "입니다.",res);
	}
	
}
