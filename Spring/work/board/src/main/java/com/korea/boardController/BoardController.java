//react에서 요청을보내면 컨트롤러에서 요청 받을준비를한다.

package com.korea.boardController;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korea.boardDTO.BoardDTO;
import com.korea.boardDTO.ResponseDTO;

@RestController // RESTful 컨트롤러임을 명시
@RequestMapping("/api/board") // 기본 URL 설정
public class BoardController {

	
	 public ResponseEntity<?> getAllPosts(){
	    	
	    	List<BoardDTO> dtos = service.getAllPosts();
	    	ResponseDTO<BoardDTO> = ResponseDTO.
	    }
}
