package ex03_test;

import java.util.ArrayList;
import java.util.List;

interface Readable{};
interface Closeable{};

class BoxType implements Readable,Closeable{};

class Box<T extends Readable & Closeable>{
	List<T> list = new ArrayList<>();
	
	public void add(T item) {
		list.add(item);
	}
	
}

public class Ex03_Generic {
	public static void main(String[] args) {
		 // Readable 와 Closeable 를 동시에 구현한 클래스만이 타입 할당이 가능하다
		Box<BoxType> box = new Box<>();
		 // 심지어 최상위 Object 클래스여도 할당 불가능하다
	// Box<Object> box2 = new Box<>(); // ! Error
		
	}
}
