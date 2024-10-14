package com.korea.exam.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korea.exam.DTO.ExamDTO;
import com.korea.exam.Service.ExamService;

import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("/exam")
@RequiredArgsConstructor
public class ExamController {
	
	private final ExamService examService;
	
	@PostMapping
	public ResponseEntity<?> addExam(@RequestBody ExamDTO dto){
		ExamDTO createExam = examService.addExam(dto);
		return ResponseEntity.ok().body(createExam);
	}
	
	
	@GetMapping
    public ResponseEntity<List<ExamDTO>> getAllExams() {
        List<ExamDTO> exams = examService.getAllExams();
        return ResponseEntity.ok().body(exams);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getExamById(@PathVariable Long id) {
	    ExamDTO exam = examService.getExamById(id);

	    if (exam != null) {
	        return ResponseEntity.ok().body(exam); 
	    } else {
	        return ResponseEntity.notFound().build(); 
	    }
	}
	
	@PutMapping("/{id}")
    public ResponseEntity<?> updateExam(@PathVariable(value = "id") Long id, @RequestBody ExamDTO dto) {
        ExamDTO updatedExam = examService.updateExam(id, dto);
        
        if (updatedExam != null) {
            return ResponseEntity.ok().body(updatedExam); // 수정된 시험을 반환
        } else {
            return ResponseEntity.badRequest().body("업데이트가 안됨");
        }
    }
	
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteExam(@PathVariable Long id) {
        boolean deleted = examService.deleteExam(id);
        if (deleted) {
            return ResponseEntity.ok("삭제 성공");
        } else {
            return ResponseEntity.status(404).body("시험이 존재하지 않거나 삭제 실패: " + id);
        }
    }
	
	
}
