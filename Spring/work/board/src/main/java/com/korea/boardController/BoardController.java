//react에서 요청을보내면 컨트롤러에서 요청 받을준비를한다.

package com.korea.boardController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korea.boardDTO.BoardDTO;
import com.korea.boardDTO.ResponseDTO;
import com.korea.boardService.BoardService;

@RestController // RESTful 컨트롤러임을 명시
@RequestMapping("/api/board") // 기본 URL 설정

public class BoardController {
	

	private final BoardService service;
	
	 public BoardController(BoardService service) {
	        this.service = service;
	    }
	 @CrossOrigin(origins = "http://localhost:3000")  // CORS 설정 추가
	@GetMapping("/all")
	 public ResponseEntity<?> getAllPosts(){
	    	List<BoardDTO> dtos = service.getAllPosts();
	    	ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();
	    	return ResponseEntity.ok(response);
	    }
}
