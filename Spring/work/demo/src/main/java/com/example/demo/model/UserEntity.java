package com.example.demo.model;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
//↓ 유니크 제약조건
// 테이블에서 username 컬럼이 유니크하도록 설정한다. 즉, 동일한 username을 가진 유저는 중복으로 생성될 수 없다.
@Table(uniqueConstraints = {@UniqueConstraint(columnNames="username")})
public class UserEntity {

	
	@Id // JPA에서 이 필드가 테이블의 Primary Key임을 나타낸다.
    @GeneratedValue(generator="system-uuid") // id 필드는 자동으로 생성된다. 여기서는 UUID 전략을 사용한다.
	@GenericGenerator(name="system-uuid", strategy="uuid") 
    // Hibernate에서 제공하는 UUID를 생성하는 커스텀 전략을 사용한다. system-uuid라는 이름으로 UUID를 생성하는 방식이다.
	private String id; // 유저에게 고유하게 부여되는 id, uuid로 생성된다.
	@Column(nullable=false)
	private String username; //아이디로 사용할 유저네임 이메일 형식으로 만들자
	private String password; //유저의 패스워드
	private String role; // 유저의 권한(관리자, 일반사용자)
	private String authPorivder; //  OAuth에서  : 소셜로그인시 사용할 유저 정보 제공자
	
	
}
