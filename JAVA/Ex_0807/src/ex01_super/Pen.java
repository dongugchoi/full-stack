package ex01_super;

class pen{
	private int amount;
	public int getAmount(){return amount;}
	public void setAmount(int amount){this.amount = amount;}
}

class SharpPencil extends pen{ //샤프펜
    private int width; //펜의 굵기

}

class Ballpen extends pen{ //볼펜
    private String color; //볼펜의 색
    public String getColor(){return color;}
    public void setColor(String color){this.color = color;}
}

class FountainPen extends Ballpen{
    public void refill(int n){
    	setAmount(n);
    	}
}

//
