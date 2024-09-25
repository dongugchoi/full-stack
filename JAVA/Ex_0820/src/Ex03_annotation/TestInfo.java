package Ex03_annotation;

import static java.lang.annotation.ElementType.*; //열거형
import java.lang.annotation.Target;
import java.lang.annotation.*;
import static java.lang.annotation.RetentionPolicy.*; // 열거형

@Target({TYPE,FIELD,TYPE_USE,METHOD})
@Retention(RUNTIME) 
public @interface TestInfo {
	//어노테이션 요소의 규칙
	//요소의 타입은 기본자료형,String, Enum, 어노테이션, Class만 허용된다.
	//()안에 매개변수를 선언할 수 없다.
	//예외를 선언할 수 없다.
	//요소를 타입 매개변수로 정의할 수 없다.
	
	String value();
}
