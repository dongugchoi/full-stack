package com.korea.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.korea.user.model.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	//아이디를 기준으로 유저를 검색하는 메서드
	
	Optional<UserEntity> findById(String id);

	UserEntity findByIdAndPwd(String id, String pwd);
}
