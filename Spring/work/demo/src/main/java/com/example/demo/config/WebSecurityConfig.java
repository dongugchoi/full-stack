package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

import com.example.demo.security.JwtAuthenticationFilter;

import lombok.extern.slf4j.Slf4j;

@Configuration
@EnableWebSecurity
@Slf4j
public class WebSecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;
    
	//스프링 시큐리티 6.x 버전에 맞춰 메서드를 최신화 해야한다.
	//스프링 시큐리티 6.x 버전에서는 몇 가지 주요 메서드들이 Deprecated 되었기 때문에, 새로운 방식으로 수정할 필요가 있다.
	//authorizeRequests() → authorizeHttpRequests()
	//csrf() → 람다 표현식 기반으로 변경
	//httpBasic() → 람다 표현식 기반으로 변경

    @Bean
    protected DefaultSecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // HttpSecurity 설정
        http
            .cors(corsConfigurer -> corsConfigurer.disable()) // WebMvcConfig에서 이미 설정했으므로 기본 CORS 설정 사용
            .csrf(csrfConfigurer -> csrfConfigurer.disable()) // CSRF 비활성화 (새로운 방식)
            .httpBasic(httpBasicConfigurer -> httpBasicConfigurer.disable()) // JWT를 사용하므로 Basic 인증 비활성화
            .sessionManagement(sessionManagementConfigurer ->
                sessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // 세션을 사용하지 않으므로 Stateless로 설정
				//sessionCreationPolicy() 메서드는 세션 생성 정책을 설정하는 메서드
				//SessionCreationPolicy.STATELESS: 세션을 생성하지 않고 완전히 stateless한 방식으로 동작하도록 설정하는 값.
            .authorizeHttpRequests(authorizeRequestsConfigurer -> // 요청에 대한 인증/인가 설정
                authorizeRequestsConfigurer
                    .requestMatchers("/", "/auth/**").permitAll() // 특정 경로는 인증 없이 허용
                    .anyRequest().authenticated() // 그 외의 요청은 인증 필요
            );

        //filter 등록
        //매 요청마다
        //CorsFilter 실행한 후에
        //jwtAuthenticationFilter를 실행한다.
        http.addFilterAfter(jwtAuthenticationFilter, CorsFilter.class);

		//addFilterAfter()
		//필터 체인에서 첫번째 인자로 제공한 필터를 두번째 인자로 제공한 필터 뒤에 추가하겠다는 의미이다.
		//필터가 A, B, C 순서로 실행되길 원한다면:
		//http.addFilterAfter(B, A.class) → A 다음에 B 실행
		//http.addFilterAfter(C, B.class) → B 다음에 C 실행
        
        return http.build();
    }
}