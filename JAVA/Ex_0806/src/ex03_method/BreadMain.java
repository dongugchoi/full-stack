package ex03_method;

public class BreadMain {
	public static void main(String[] args) {

		Bread br = new Bread();
		br.makeBread();
		br.makeBread(3);
		br.makeBread(3, "모카");
	}
}
