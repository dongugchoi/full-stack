package com.example.product.ProductDTO;

import com.example.product.ProductEntity.ProductEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor // 빌더패턴을 사용하려면 있어야한다.
public class ProductDTO {
	private Integer id;
	private String name;
	private String description;
	private Double price;
	
	
	// Entity -> DTO 변환
	public ProductDTO(ProductEntity entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.description = entity.getDescription();
		this.price = entity.getPrice();
	}
	
	// DTO -> Entity로 변환
	public static ProductEntity toEntity(ProductDTO dto) {
		return ProductEntity.builder()
				.id(dto.getId())
				.name(dto.getName())
				.description(dto.description)
				.price(dto.getPrice())
				.build();
	}
	
	
	
}
