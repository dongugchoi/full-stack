package ex01_interface;

public class ColorPoint extends Point {
	
	String Color;
	
	public ColorPoint(int x, int y, String Color) {
		super(x, y);
		this.Color = Color;
	}
	
	public void setXY(int x, int y) {
		move(x,y);
	}
	
	public void setColor(String Color) {
		this.Color = Color;
	}
	
	public String toString() {
		return Color+"색의 ("+getX()+","+getY()+")의 점";
	}
	

}
