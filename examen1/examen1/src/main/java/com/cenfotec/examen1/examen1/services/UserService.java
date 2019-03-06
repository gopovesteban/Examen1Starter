package com.cenfotec.examen1.examen1.services;

import com.cenfotec.examen1.examen1.domain.User;
import com.cenfotec.examen1.examen1.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional()
    public User createUser(User user){
        return userRepository.save(user);
    }
}
