package com.exam.dongugchoi.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.dongugchoi.model.ProductEntity;



@Repository
public interface ProductRepository extends JpaRepository<ProductEntity,Integer>{

}
