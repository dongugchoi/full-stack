package com.korea.exam.DTO;

import com.korea.exam.Entity.ExamEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExamDTO {
	
	private Long id;
	private String name;
	private Double price;
	private Integer stock;
	
	public ExamDTO(ExamEntity entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.price = entity.getPrice();
		this.stock = entity.getStock();
	}
	
	public static ExamEntity toEntity(ExamDTO dto) {
		return ExamEntity.builder()
				.id(dto.getId())
				.name(dto.getName())
				.price(dto.getPrice())
				.stock(dto.getStock())
				.build();
				
				
				
		
	}
	
	
	
}
