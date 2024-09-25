package ex01_generic;

public class DataListExample {
	public static void main(String[] args) {
		//DataList 객체 생성하기 변수명은 list
		//제네릭타입은 기본자료형을 인식하지 않는다.
		//따라서 int,double등의 기본자료형을 제네릭타입르오 이용하려면
		//Integer,Double등의 Wraaper 클래스를 이용해야 한다.
		DataList<Integer> list = new DataList<Integer>();
		//객체를 만들면서 10의 크기가 들어온다.
		
		//private로 선언되어 배열에 직접 접근 불가능
		
		
		//타입이다른데 저장이되는 이유는 Object타입이여서
		
		//정수 입력
		list.add(10);
		list.add(20);
		list.add(30);
		list.add(40);
		
//		//문자열 저장
//		list.add("문자열");
//		
//		//실수 저장
//		list.add(13.45);
//		
//		//데이터 출력
//		for(int i = 0; i <list.size(); i++) {
//			Object data = list.get(i);
//			
//			//저장된 타입이 어떤타입인지 검사
//			if(data instanceof Integer) {
//				System.out.println("정수 : " +(int)data);
//			}else if(data instanceof Double) {
//				System.out.println("실수 : " +(double)data);
//			}else if(data instanceof String) {
//				System.out.println("문자열 : " +(String)data );
//			}
			int sum = 0;
			for(int i = 0; i < list.size(); i++) {
				sum += list.get(i);
			}
			System.out.println(sum);
		
		}
		
		
		
		
		
		
		
		
	
}
