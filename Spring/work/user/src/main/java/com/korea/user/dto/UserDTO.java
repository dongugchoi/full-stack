package com.korea.user.dto;

import com.korea.user.model.UserEntity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class UserDTO {

	private String token;
	private int idx; //유저에게 고유하게 부여되는 id, uuid로 생성된다.
	private String id;
	private String name; //아이디로 사용할 유저네임. 이메일 형식으로 만들자
	private String pwd; //비밀번호  -> null 값이 허용
	private String email;//유저의 권한 (관리자, 일반 사용자)

    // Entity -> DTO 변환
    public UserDTO(UserEntity entity) {
    	
    	this.idx = entity.getIdx();
        this.id = entity.getId();
        this.pwd = entity.getPwd();
        this.name = entity.getName();
        this.email = entity.getEmail();
    }

    // DTO -> Entity 변환
    public static UserEntity toEntity(UserDTO dto) {
        return UserEntity.builder()
        		.idx(dto.getIdx())
                .id(dto.getId())
                .pwd(dto.getPwd())
                .name(dto.getName())
                .email(dto.getEmail())
                .build();
    }
}