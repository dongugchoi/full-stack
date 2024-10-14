package com.korea.user.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
//테이블에서 username 컬럼이 유니크 제약조건을 설정
//동일한 username을 가진 유저는 생성될 수 없다.
//@Table(uniqueConstraints = {@UniqueConstraint(columnNames = "idx")}) //중복은 안되는데 null이 가능하다. <제약 조건>
@Table(name = "users")
public class UserEntity {
	
	@Id //JPA에서 id 필드가 테이블의 Primary Key임을 나타낸다.
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idx; //유저에게 고유하게 부여되는 id, uuid로 생성된다.
	
	
	//unique 제약조건, not null 제약조건
	@Column(unique=true, nullable= false)
	private String id;
	private String name; //아이디로 사용할 유저네임. 이메일 형식으로 만들자
	private String pwd; //비밀번호  -> null 값이 허용
	private String email;//유저의 권한 (관리자, 일반 사용자)
}



















