package com.cenfotec.examen1.examen1.repository;

import com.cenfotec.examen1.examen1.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends JpaRepository<Tag,Long> {
}
