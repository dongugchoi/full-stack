package com.example.demo.security;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

public class ApplicationOAuth2User implements OAuth2User {
	
	private String id;
	private Collection<? extends GrantedAuthority> authorities;
	private Map<String, Object> attributes;
	
	public ApplicationOAuth2User(String id, Map<String, Object> attributes) {
		super();
		this.id = id;
		this.attributes = attributes;
		this.authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
		
		//singletonList()
		//단일 요소를 포함하는 불변 리스트를 생성한다.
		//여기서는 new SimpleGrantedAuthority("ROLE_USER")라는 하나의 권한 객체를
		//담고있는 리스트를 생성하는데 사용된다.
		
	}

	@Override
	public Map<String, Object> getAttributes() {
		// TODO Auto-generated method stub
		return attributes;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}
	

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return this.id; //name대신 id를 반환한다.
	}
	
	
	
	
	
}
