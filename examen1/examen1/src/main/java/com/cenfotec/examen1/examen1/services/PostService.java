package com.cenfotec.examen1.examen1.services;

import com.cenfotec.examen1.examen1.domain.Post;
import com.cenfotec.examen1.examen1.domain.Tag;
import com.cenfotec.examen1.examen1.domain.User;
import com.cenfotec.examen1.examen1.repository.PostRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository){
        this.postRepository = postRepository;
    }@Transactional()
    public Post createPost(Post post){
        return postRepository.save(post);
    }

    @Transactional(readOnly = true)
    public Optional<List<Post>> findByTag(Tag tag){
        return postRepository.findByTag(tag);
    }

    @Transactional(readOnly = true)
    public Optional<List<Post>> findByUser(User user){
        return postRepository.findByUser(user);
    }


}
