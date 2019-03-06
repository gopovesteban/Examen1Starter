package com.cenfotec.examen1.examen1.services;

import com.cenfotec.examen1.examen1.domain.Tag;
import com.cenfotec.examen1.examen1.repository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TagService {

    private final TagRepository tagRepository;
    public TagService(TagRepository tagRepository){
        this.tagRepository = tagRepository;
    }

    @Transactional()
    public Tag createTag(Tag tag){
        return tagRepository.save(tag);
    }
}
