package com.example.product.ProductService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.product.ProductDTO.ProductDTO;
import com.example.product.ProductEntity.ProductEntity;
import com.example.product.presistence.ProductRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductService {
	
	private final ProductRepository repository;
	
	public ProductDTO addProduct(ProductDTO productDto) {
		//넘어온 Dto를 entity로 변환함
		ProductEntity entity = ProductDTO.toEntity(productDto); 
		//Entity를 db에 추가하고 DTO로 변환하여 반환함
		return new ProductDTO(repository.save(entity));
	}
	
//	public List<ProductDTO> getFilteredProducts(Double minPrice, String name) {
//		List<ProductEntity> products; //빈 리스트
//
//		// 조건에 따라 제품 조회
//		if (minPrice != null && name != null && !name.isEmpty()) { 
//			// minPrice와 name 모두 제공된 경우
//			products = repository.findByPriceGreaterThanEqualAndNameContaining(minPrice, name);
//		} else if (minPrice != null) {
//			// minPrice만 제공된 경우
//			products = repository.findByPriceGreaterThanEqual(minPrice);
//		} else if (name != null && !name.isEmpty()) {
//			// name만 제공된 경우
//			products = repository.findByNameContaining(name);
//		} else {
//			// 아무것도 제공되지 않은 경우 전체 조회
//			products = repository.findAll();
//		}
//
//		// 엔티티 리스트를 DTO 리스트로 변환 후 반환
//		return products.stream()
//				.map(ProductDTO::new) // ProductEntity -> ProductDTO로 변환
//				.collect(Collectors.toList());
//	}

	public List<ProductDTO> getFilteredProducts(Double minPrice, String name) {
		List<ProductEntity> products = repository.findAll(); //빈 리스트
		if(minPrice != null) {
	          products = products.stream().filter(product -> product.getPrice() >= minPrice).collect(Collectors.toList());
	    
		}else if(name != null && name.isEmpty()) {
	             products = products.stream().filter(product -> product.getName().toLowerCase().contains(name.toLowerCase())).collect(Collectors.toList());
	    }
		
		return products.stream().map(ProductDTO::new).collect(Collectors.toList());
		
		
	}

	
	public List<ProductDTO> updateProduct(ProductEntity entity){
		validate(entity);
		
		Optional<ProductEntity> original = repository.findById(entity.getId());
		
		if(original.isPresent()) {
			ProductEntity product = original.get();
			product.setName(entity.getName());
			product.setPrice(entity.getPrice());
			product.setDescription(entity.getDescription());
			
			repository.save(product);
			
			return List.of(new ProductDTO(product));
		}
		return null;
	}
	
	private void validate(ProductEntity entity) {
		//전달된 TodoEntity가 null인지 확인합니다.
		if(entity == null) {
			log.warn("Entity cannot be null.");
			throw new RuntimeException("Entity");
		}
		
		//userId가 안넘어왔을 때
		if(entity.getId() == null) {
			log.warn("Unknown user");
			throw new RuntimeException("Unknown user");
		}
		
	}
	
}
