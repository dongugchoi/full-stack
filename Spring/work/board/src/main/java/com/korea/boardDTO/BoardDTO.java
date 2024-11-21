package com.korea.boardDTO;

import lombok.Builder;
import lombok.Data;

//데이터 전소용 클래스 컨트롤러나 서비스 간에 데이터를 전달하거나 클라이언트에 보낼 데이터를 가공할 때 사용한다.
@Data
@Builder
public class BoardDTO {

	private Long id;
	private String title;
	private String author;
	private String writingTime;
	private String content;
	
}
