package com.korea.user.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.korea.user.dto.UserDTO;
import com.korea.user.model.UserEntity;
import com.korea.user.persistence.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

	// 사용자 생성
	public List<UserDTO> create(UserEntity entity) {
		repository.save(entity); // 데이터베이스에 저장

		// 모든 사용자 반환 (저장된 사용자 포함)
		return repository.findAll().stream().map(UserDTO::new).collect(Collectors.toList());
	}
	
	// 모든 사용자 조회
	public List<UserDTO> getAllUsers() {
	    // 모든 사용자 엔티티를 가져와서 DTO로 변환 후 반환
	    return repository.findAll().stream()
	            .map(UserDTO::new)  // UserEntity -> UserDTO로 변환
	            .collect(Collectors.toList());
	}

	public UserDTO getUserbyEmail(String email) {
		UserEntity entity = repository.findByEmail(email);
		return new UserDTO(entity);
	}
	
	// 사용자 정보 업데이트 (ID 기반)

	public List<UserDTO> updateUser(UserEntity entity) {
	    // Optional로 ID를 통해 사용자 찾기
	    Optional<UserEntity> userEntityOptional = repository.findById(entity.getId());

	    // 사용자가 존재할 경우 업데이트 로직 실행
	    userEntityOptional.ifPresent(userEntity -> {
	        // 이름과 이메일을 업데이트
	        userEntity.setName(entity.getName());
	        userEntity.setEmail(entity.getEmail());

	        // 업데이트된 사용자 정보 저장
	        repository.save(userEntity);
	    });

	    return getAllUsers();
	}
	
	// 사용자 삭제
	public boolean deleteUser(Long id) {
	    // 먼저 사용자가 존재하는지 확인
	    Optional<UserEntity> userEntityOptional = repository.findById(id);

	    if (userEntityOptional.isPresent()) {
	        // 존재하면 삭제 수행
	        repository.deleteById(id);
	        return true;  // 삭제 성공
	    } else {
	        return false; // 삭제 실패 (사용자가 없음)
	    }
	}
	
	
}
