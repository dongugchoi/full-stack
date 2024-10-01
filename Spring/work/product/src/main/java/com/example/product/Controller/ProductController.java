package com.example.product.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.product.ProductDTO.ProductDTO;
import com.example.product.ProductService.ProductService;

import lombok.RequiredArgsConstructor;

@RestController // 이 클래스가 REST API의 컨트롤러임을 나타냄
@RequestMapping("/products") // "/products"로 요청을 받음
@RequiredArgsConstructor // 자동으로 생성자를 만들어줌
public class ProductController {

    private final ProductService productService; // ProductService를 주입받음

    // 상품 추가하기
    @PostMapping // POST 요청을 처리함
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO dto) {
   

        // 저장된 상품을 DTO로 변환
        ProductDTO createProduct = productService.addProduct(dto);
        return ResponseEntity.ok().body(createProduct);
    }
    
    @GetMapping
    public ResponseEntity<?> getFilteredProducts(
    		  @RequestParam(value = "minPrice", required = false) Double minPrice, 
    	        @RequestParam(value = "name", required = false) String name) {
        // 필터링된 상품 목록 가져오기
        List<ProductDTO> filteredProducts = productService.getFilteredProducts(minPrice, name);
        return ResponseEntity.ok().body(filteredProducts); // 결과를 응답으로 반환
    }
    
    // 상품 수정하기
    @PutMapping("/{id}") // URL에서 상품 ID를 받음
    public ResponseEntity<List<ProductDTO>> updateProduct(
        @PathVariable Integer id, // URL 경로에서 ID를 가져옴
        @RequestBody ProductDTO dto) { // 요청 본문에서 수정할 상품 정보를 받음
        
        // DTO에 ID 설정 (수정할 상품의 ID)
        dto.setId(id);
        
        // 상품 업데이트 메서드 호출
        List<ProductDTO> updatedProducts = productService.updateProduct(ProductDTO.toEntity(dto));
        
        if (updatedProducts == null) {
            return ResponseEntity.notFound().build(); // 상품이 존재하지 않으면 404 반환
        }
        
        return ResponseEntity.ok(updatedProducts); // 수정된 상품 리스트 반환
    }
    
}
