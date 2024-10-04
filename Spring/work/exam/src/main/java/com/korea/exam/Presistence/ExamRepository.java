package com.korea.exam.Presistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.korea.exam.Entity.ExamEntity;

public interface ExamRepository extends JpaRepository<ExamEntity, Long>{

}
