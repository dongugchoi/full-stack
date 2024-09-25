package ex02_Enum;

import java.util.Arrays;

public class Ex01_Enum {
		public static void main(String[] args) {
			Item[] items = Item.values();
			System.out.println(Arrays.toString(items)); //Arrays 클래스 import
	    
	    //열거형 순서 반환해보기
			for(Item item : items) {
				System.out.println("name="+item.name()+",ordinal = "+item.ordinal());
			}
	    
	    Item i1 = Item.START;
			Item i2 = Item.valueOf("START");
			Item i3 = Item.valueOf(Item.class,"START");
			Item i4 = Item.STOP;
			System.out.println(i1 == i2);
			
			//초과,미만,이상,이하와 같은 비교연산자는 사용할 수 없다.
			//기준객체.compareTo(비교객체);
			//매개값을 주어진 객체를 비교해서 순서차이를 반환
			//기준객체가 비교객체보다 순번이 빠르다 -> 음수 반환
			//기준객체가 비교객체보다 순번이 느리다 -> 양수 반환
			
			
//	    System.out.println(d1 > d4);//오류남
	    
		switch(i1) {
		case START://Item.START라고 쓸 수 없다.
			System.out.println("게임시작!");
		break;
		case STOP:
			System.out.println("게임멈춤!");
		break;
		case EXIT:
			System.out.println("게임종료!");
		break;
		}
		
		Season s = Season.SUMMER;
		System.out.println(s.name());
		System.out.println("계절명 : " + s.getSeason()+"("+s.getE_season()+")");
	
	    }
}
