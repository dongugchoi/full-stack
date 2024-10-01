package com.example.product.presistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.product.ProductEntity.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Integer>{

}
