package ex01_casting;

public class Ex03_Casting {

	public static void main(String[] args) {
		//double -> float(강제형변환)
		double d1 = 1.1234;
		float f1 = (float)d1;
		System.out.printf("[double -> float] d1의 값 : %f, f1의 값 : %f\n",d1,f1);

		//double -> float(float의 최소보다 작은 값)
		double d2 = 1.0e-50;
		float f2 = (float)d2;
		System.out.println("[double -> float] d2의 값 : "+d2+ ", f2의 값 : " + f2);
		//float형이 가질 수 있는 최소값보다 작은경우 0.0이 들어간다.
		
		//double -> float(float의 최대값보다 큰경우)
		double d3 = 1.0e100;
		float f3 = (float)d3;
		System.out.println("[double -> float] d3의 값 : "+d3+ ", f3의 값 : " + f3);
		//float형이 가질 수 있는 최대값보다 큰 경우 Infinity가 나온다.
		
		//double과 flaot의 정밀도 차이
		double d4 = 9.123456789;
		float f4 = (float)d4;
		System.out.println("[double -> float] d4의 값 : "+d4+ ", f4의 값 : " + f4);
		//이번에는 float범위 내의 값은 맞지만, 소수점 아래 값에서는 정밀도에서 차이가 난다.
		
		
		
		
		
	}

}
