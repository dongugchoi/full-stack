package com.korea.user.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.korea.user.model.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    // 추가적으로 사용자 검색 기능이 필요하면 메서드를 정의할 수 있습니다.
    UserEntity findByEmail(String email);
}
