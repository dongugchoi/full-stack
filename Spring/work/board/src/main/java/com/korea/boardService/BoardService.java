// 컨트롤러에서 준비를하고 요청받은 데이터를 준비하거나 처리한다.

package com.korea.boardService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.korea.boardDTO.BoardDTO;
import com.korea.boardEntity.BoardEntity;
import com.korea.boardRepository.BoardRepository;

import lombok.AllArgsConstructor;


@Service // 서비스 계층임을 명시
@AllArgsConstructor
public class BoardService {

    private final BoardRepository repository;


    // 1. 전체 조회 (/all)
    public List<BoardDTO> getAllPosts(){
    	//repository.findAll()의 반환값 List<BoardEntity>
    	return repository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    	
    	
    }

  
    //Entity -> DTO 변환함수
    private BoardDTO convertToDTO(BoardEntity board) {
    	return BoardDTO.builder()
    			.id(board.getId())
    			.title(board.getTitle())
    			.writingTime(board.getWritingTime())
    			.content(board.getContent())
    			.build();
    }
    
    //DTO -> Entity 변환함수
    private BoardEntity convertToEntity(BoardDTO boardDTO) {
    	return BoardEntity.builder()
    			.id(boardDTO.getId())
    			.title(boardDTO.getTitle())
    			.writingTime(boardDTO.getWritingTime())
    			.content(boardDTO.getContent())
    			.build();
    }
}
