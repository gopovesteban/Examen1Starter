package com.cenfotec.examen1.examen1.web;

import com.cenfotec.examen1.examen1.domain.Tag;
import com.cenfotec.examen1.examen1.services.TagService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/examen1")
public class TagController {

    private final TagService tagService;

    public TagController(TagService tagService){
        this.tagService = tagService;
    }

    @PostMapping("/createTag")
    public Tag createTag(@RequestBody Tag tag){
        return tagService.createTag(tag);
    }


}
