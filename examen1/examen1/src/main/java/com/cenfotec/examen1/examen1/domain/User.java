package com.cenfotec.examen1.examen1.domain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String nickname;

    private String status;

    @OneToMany(cascade=CascadeType.MERGE)
    private Set<Tag> preferences = new HashSet<>();


    public Set<Tag> getPreferences() {
        return preferences;
    }

    public void setPreferences(Set<Tag> preferences) {
        this.preferences = preferences;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
