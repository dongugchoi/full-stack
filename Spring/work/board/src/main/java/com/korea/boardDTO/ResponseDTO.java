package com.korea.boardDTO;

//여기서 데이터를 넣어 나간다. 어떤타입이들어올지모르니 제네릭타입
public class ResponseDTO<T> {
	private String error;
	private T data;
}
