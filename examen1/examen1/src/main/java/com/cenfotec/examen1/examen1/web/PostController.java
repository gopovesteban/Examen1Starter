package com.cenfotec.examen1.examen1.web;

import com.cenfotec.examen1.examen1.domain.Post;
import com.cenfotec.examen1.examen1.domain.Tag;
import com.cenfotec.examen1.examen1.domain.User;
import com.cenfotec.examen1.examen1.services.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "localhost:4200" )
@RestController
@RequestMapping("/examen1")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService){
        this.postService = postService;
    }

    @PostMapping("/createPost")
    public Post createPost(@RequestBody Post post){
        return postService.createPost(post);
    }

    @GetMapping("/getByTag/{tag}")
    public Optional<List<Post>> getByTag(@PathVariable Tag tag){
        return postService.findByTag(tag);
    }

    @GetMapping("/getByUser/{user}")
    public Optional<List<Post>> getByUser(@PathVariable User user){
        return postService.findByUser(user);
    }
}
