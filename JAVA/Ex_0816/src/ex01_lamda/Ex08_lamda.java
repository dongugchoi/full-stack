package ex01_lamda;

@FunctionalInterface
interface IAdd{
	int add(int x, int y);
}

class MathUtils{
	public static int AddElement(int x, int y) {
		return x+y;
	}
}



public class Ex08_lamda {
	public static void main(String[] args) {
		MathUtils mu = new MathUtils();
		
		// IAdd addLamda = (x,y) -> MathUtils.AddElement(x, y);
		IAdd addLamda = MathUtils::AddElement;
		System.out.println(addLamda.add(10, 20));
		
		IAdd addMethodRef = MathUtils::AddElement;
		System.out.println(addLamda.add(20, 40));
	}
}
