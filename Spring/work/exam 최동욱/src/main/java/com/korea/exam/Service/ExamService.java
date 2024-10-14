package com.korea.exam.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.korea.exam.DTO.ExamDTO;
import com.korea.exam.Entity.ExamEntity;
import com.korea.exam.Presistence.ExamRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class ExamService {
	
	private final ExamRepository repository;
	
	public ExamDTO addExam(ExamDTO examDto) {
		ExamEntity entity = ExamDTO.toEntity(examDto);
		return new ExamDTO(repository.save(entity));
	}
	
	
	 public List<ExamDTO> getAllExams() {
	        List<ExamEntity> examEntities = repository.findAll();
	        return examEntities.stream()
	                           .map(ExamDTO::new)
	                           .collect(Collectors.toList());
	}
	
	 public ExamDTO getExamById(Long id) {
		    Optional<ExamEntity> examEntity = repository.findById(id);
		    return examEntity.map(ExamDTO::new).orElse(null);
		}

	
	
	 public ExamDTO updateExam(Long id, ExamDTO dto) {
	        Optional<ExamEntity> optionalExamEntity = repository.findById(id);
	        if (optionalExamEntity.isPresent()) {
	            ExamEntity examEntity = optionalExamEntity.get();
	            examEntity.setName(dto.getName());
	            examEntity.setPrice(dto.getPrice());
	            examEntity.setStock(dto.getStock());
	            repository.save(examEntity);
	            return new ExamDTO(examEntity);
	        } else {
	            return null;
	        }
	 }
	 
	 public boolean deleteExam(Long id) {
	        Optional<ExamEntity> examEntity = repository.findById(id);
	        if (examEntity.isPresent()) {
	            repository.deleteById(id);
	            return true;
	        }
	        return false;
	    }
	 

	 
	
}
