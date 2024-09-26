package com.example.demo.qualifier;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Qualifier("desktop") @Primary
//@Primary를 작성하면 default가 된다.
public class Desktop implements Computer{
	
	@Override
	public int getScreenWidth() {
		return 1920;
	}
}
