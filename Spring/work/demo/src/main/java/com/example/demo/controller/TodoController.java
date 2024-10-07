package com.example.demo.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ResponseDTO;
import com.example.demo.dto.TodoDTO;
import com.example.demo.model.TodoEntity;
import com.example.demo.service.TodoService;

//@Component // View(html,jsp,thymelef) 를 반환
@RestController // 이 클래스가 컨트롤러임을 명시하는 어노테이션\
@RequestMapping("todo")
public class TodoController {
	
	private TodoService service;
	
	//TodoService 의존성 주입하기
	public TodoController(TodoService service) {
		this.service = service;
	}
	
	

	//다른 클래스에 있는 메서드를 사용하기위해 객체를 우선 만들어야 한다.
	//스프링에서는 객체를 이미 만들어놨다. 주입만 하면 된다.
	
	
	//Get /todo로 요청을 했을 때 testTodo()메서드 호출되도록 정의하기
	//testTodo에서는 TodoService의 메서드를 호출하여 결과를 ResponseDTO의 리스트에 묶어서
	//ResponseEntity.ok().body(response)로 반환하기
	
	
	//아래의 메서드가 실행되기 위한 조건
	//브라우저에 주소가 호출되야 한다. localhost:9090/todo/todo
	@GetMapping("/todo")
	public ResponseEntity<?> testTodo(){
		String str = service.testService();
		//리스트의 생성
		//인덱스를 가지고 크기의 제한이 없는 자료구조
		List<String> list = new ArrayList<>();
		//리스트 값 추가시 add
		list.add(str);
		// ResponseDTO객체 생성
		// builder 패턴으로 만들어주는거임
		ResponseDTO<String>response = ResponseDTO.<String>builder().data(list).build(); //일종의 그릇
		return ResponseEntity.ok().body(response);
		
	}
	
	@PostMapping
	public ResponseEntity<?> createTodo(@AuthenticationPrincipal String userId, @RequestBody TodoDTO dto){
		try {
			// (1) TodoEntity로 변환한다.
						TodoEntity entity = TodoDTO.toEntity(dto);

				// (2) id를 null로 초기화 한다. 생성 당시에는 id가 없어야 하기 때문이다.
				entity.setId(null);

				// (3) 임시 유저 아이디를 설정 해 준다. 이 부분은 4장 인증과 인가에서 수정 할 예정이다. 지금은 인증과 인가 기능이 없으므로 한 유저(temporary-user)만 로그인 없이 사용 가능한 어플리케이션인 셈이다
				entity.setUserId(userId);

				// (4) 서비스를 이용해 Todo엔티티를 생성한다.
				List<TodoEntity> entities = service.create(entity);

				// (5) 자바 스트림을 이용해 리턴된 엔티티 리스트를 TodoDTO리스트로 변환한다.

				List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

				// (6) 변환된 TodoDTO리스트를 이용해ResponseDTO를 초기화한다.
				ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

				// (7) ResponseDTO를 리턴한다.
				return ResponseEntity.ok().body(response);
			} catch (Exception e) {
				// (8) 혹시 예외가 나는 경우 dto대신 error에 메시지를 넣어 리턴한다.

				String error = e.getMessage();
				ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
				return ResponseEntity.badRequest().body(response);
			}
		}
	
	@GetMapping
	public ResponseEntity<?> retrieveTodoList(@AuthenticationPrincipal String userId) {
		
		// (1) 서비스 메서드의 retrieve메서드를 사용해 Todo리스트를 가져온다
		List<TodoEntity> entities = service.retrieve(userId);

		// (2) 자바 스트림을 이용해 리턴된 엔티티 리스트를 TodoDTO리스트로 변환한다.
		List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

		// (6) 변환된 TodoDTO리스트를 이용해ResponseDTO를 초기화한다.
		ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

		// (7) ResponseDTO를 리턴한다.
		return ResponseEntity.ok().body(response);
	}


	@PutMapping
	public ResponseEntity<?> updateTodo(@AuthenticationPrincipal String userId,@RequestBody TodoDTO dto) {
		

		// (1) dto를 entity로 변환한다.
		TodoEntity entity = TodoDTO.toEntity(dto);

		// (2) id를 temporaryUserId로 초기화 한다. 여기는 4장 인증과 인가에서 수정 할 예정이다.
		entity.setUserId(userId);

		// (3) 서비스를 이용해 entity를 업데이트 한다.
		List<TodoEntity> entities = service.update(entity);

		// (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 TodoDTO리스트로 변환한다.
		List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

		// (5) 변환된 TodoDTO리스트를 이용해ResponseDTO를 초기화한다.
		ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

		// (6) ResponseDTO를 리턴한다.
		return ResponseEntity.ok().body(response);
	}

	@DeleteMapping
	public ResponseEntity<?> deleteTodo(@AuthenticationPrincipal String userId, @RequestBody TodoDTO dto) {
		try {

			// (1) TodoEntity로 변환한다.
			TodoEntity entity = TodoDTO.toEntity(dto);

			// (2) 임시 유저 아이디를 설정 해 준다. 이 부분은 4장 인증과 인가에서 수정 할 예정이다. 지금은 인증과 인가 기능이 없으므로 한 유저(temporary-user)만 로그인 없이 사용 가능한 어플리케이션인 셈이다
			entity.setUserId(userId);

			// (3) 서비스를 이용해 entity를 삭제 한다.
			List<TodoEntity> entities = service.delete(entity);

			// (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 TodoDTO리스트로 변환한다.
			List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());

			// (5) 변환된 TodoDTO리스트를 이용해ResponseDTO를 초기화한다.
			ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

			// (6) ResponseDTO를 리턴한다.
			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			// (8) 혹시 예외가 나는 경우 dto대신 error에 메시지를 넣어 리턴한다.
			String error = e.getMessage();
			ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}

}