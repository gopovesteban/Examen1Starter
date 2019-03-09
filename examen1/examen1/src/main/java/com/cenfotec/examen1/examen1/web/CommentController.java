package com.cenfotec.examen1.examen1.web;

import com.cenfotec.examen1.examen1.domain.Comment;
import com.cenfotec.examen1.examen1.services.CommentService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/examen1")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService){
        this.commentService = commentService;
    }
    @PostMapping("/createComment")
    public Comment createComment(@RequestBody Comment comment){
        return commentService.createComment(comment);
    }

}
