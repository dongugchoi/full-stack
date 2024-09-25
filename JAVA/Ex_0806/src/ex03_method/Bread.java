package ex03_method;



public class Bread {
	//makeBread()메서드를 만든다.
	//오버로딩을 통해서 다음과 같은 결과를 출력해주세요
	//첫번째 makeBread()
	//빵을 만들었습니다.
	
	//두번쨰 makeBread()
	//빵을 만들었습니다.
	//빵을 만들었습니다.
	// ...
	//빵을 만들었습니다.
	//요청하신 N개의 빵을 만들었습니다.
	
	//세번째 makeBread()
	//xx빵을 만들었습니다.
	//xx빵을 만들었습니다.
	// ...
	//xx빵을 만들었습니다.
	//요청하신 N개의 xx빵을 만들었습니다.

	
	void makeBread() {
		System.out.println("빵을 만들었습니다.");
		System.out.println("----------------");
	}
	
	void makeBread(int num ) {
		for(int i = 0; i < num; i++) {
			System.out.printf("빵을 만들었습니다.\n");
			
			
		}
		System.out.printf("요청하신 %d개의 빵을 만들었습니다.\n",num);
		System.out.println("----------------------");
	}
	
	void makeBread(int num, String bname) {
		for(int i = 0; i < num; i++) {
			System.out.printf("%s빵을 만들었습니다.\n",bname);

		}
		System.out.printf("요청하신 %d개의 %s빵을 만들었습니다.",num,bname);
	}
	
}
