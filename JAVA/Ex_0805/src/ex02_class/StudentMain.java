package ex02_class;

public class StudentMain {
	public static void main(String[] args) {
		System.out.println(Student.schoolName);
		Student.goToSchool();
	
		
		Student stu1 = new Student();
		stu1.studentName = "김고이";
		stu1.hello();
		System.out.println("학교는 " + Student.schoolName+" 입니다.");
		Student.goToSchool();
		
		System.out.println();
		
		Student stu2 = new Student();
		stu2.studentName = "홍길동";
		stu2.hello();
		System.out.println("학교는 " + Student.schoolName+" 입니다.");
		Student.goToSchool();
		
		//Arrays 클래스
		//Math.random(); -객체 생성 안해도 됨
		//String         -객체 생성 안해도 됨
		//Scanner
		//Random
	
	
	
	}
	
}
