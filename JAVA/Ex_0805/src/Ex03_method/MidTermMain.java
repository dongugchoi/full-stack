package Ex03_method;

public class MidTermMain {

	public static void main(String[] args) {
		int [] student1 = {67, 90};
		int [] student2 = {75, 80};

		MidTerm mid = new MidTerm();
		int sum1 = mid.score(student1);
		int sum2 = mid.score(student2);
		
		
		if(sum1 > sum2) {
			System.out.println("1학생의 점수가 더 높습니다.");
		}else if(sum1 < sum2) {
			System.out.println("2학생의 점수가 더 높습니다.");
		}else {
			System.out.println("두 학생의 점수가 똑같습니다.");
		}
		
		
		
	}

}
