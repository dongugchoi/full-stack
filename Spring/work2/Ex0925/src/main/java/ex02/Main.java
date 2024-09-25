package ex02;


//객체 자동등록하기
//ComponentScanning
//클래스 앞에 @ComPonent 어노테이션을 붙이면 패키지에
//컴포넌트 어노테이션이 붙어있는 클래스를 찾아서 객체로 만들어서 맵으로 저장하는 기법

@Component class Car{};
class SportCar extends Car{};
class Truck extends Car{};
class Engine{};


public class Main {

}
