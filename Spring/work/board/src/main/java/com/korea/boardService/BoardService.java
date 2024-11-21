// 컨트롤러에서 준비를하고 요청받은 데이터를 준비하거나 처리한다.

package com.korea.boardService;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.korea.boardDTO.BoardDTO;
import com.korea.boardEntity.BoardEntity;
import com.korea.boardRepository.BoardRepository;

@Service // 서비스 계층임을 명시
public class BoardService {

    private final BoardRepository repository;


    // 1. 전체 조회 (/all)
    public List<BoardDTO> getAllPosts(){
    	return repository.findAll().stream().map(this::);
    }

    // 1-1. 한 건 조회 (/get/{id})
    public BoardEntity getBoardById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글을 찾을 수 없습니다."));
    }

    // 2. 추가 (/write)
    @Transactional
    public BoardEntity create(BoardEntity boardEntity) {
        return repository.save(boardEntity);
    }

    //3. 수정 "/modify/{id}"
    
    // 4. 삭제 (/delete/{id})
    @Transactional
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("게시글을 찾을 수 없습니다.");
        }
        repository.deleteById(id);
    }
}
