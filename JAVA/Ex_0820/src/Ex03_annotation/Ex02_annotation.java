package Ex03_annotation;

import java.lang.annotation.Annotation;

@TestInfo(value="테스트 정보")
public class Ex02_annotation {
	
	Annotation[] annos = Ex2_annotaion.class.getAnnotations();
	
	for(Annotation anno : annos) {
		System.out.println(anno);
	}
	
	TestInfo testInfo = (TestInfo)Ex2_annotaion.class.getAnnotation(TestInfo.class);
	
}
