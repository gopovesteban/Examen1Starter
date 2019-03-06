package com.cenfotec.examen1.examen1.repository;

import com.cenfotec.examen1.examen1.domain.Post;
import com.cenfotec.examen1.examen1.domain.Tag;
import com.cenfotec.examen1.examen1.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post,Long> {

    Optional<List<Post>> findByTag(Tag tag);

    Optional<List<Post>> findByUser(User user);
}
