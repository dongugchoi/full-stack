package com.korea.boardDTO;

import java.util.List;

import lombok.Builder;
import lombok.Data;

//여기서 데이터를 넣어 나간다. 어떤타입이들어올지모르니 제네릭타입
@Data
@Builder
public class ResponseDTO<T> {
	private String error;
	private List<T> data;
}
