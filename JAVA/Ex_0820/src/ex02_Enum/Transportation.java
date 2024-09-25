package ex02_Enum;

public enum Transportation {

	BUS(100){
		int totalFare(int distance){
			return distance*fare;
	}	
   },
	TRAIN(150){
	   int totalFare(int distance){
			return distance*fare;
	}	
   },
	SHIP(200){
	   int totalFare(int distance){
			return distance*fare;
	}	
   },
	AIRPLANE(250){
	   int totalFare(int distance){
			return distance*fare;
	}	
   };
	
	//열거형 상수객체로부터 전달받은 값을 필드에 전달
	protected final int fare;
	
	private Transportation(int fare){
		this.fare = fare;
	}
	abstract int totalFare(int distance); //추상메서드를 적으면 구현을 해야 한다며 오류가 난다.
}

	
