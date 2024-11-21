//데이터를 저장하는 데이터베이스와 대화하기 위해 필요함


package com.korea.boardRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.korea.boardEntity.BoardEntity;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Long> {
	
}
