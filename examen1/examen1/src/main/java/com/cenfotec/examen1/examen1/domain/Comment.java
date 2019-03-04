package com.cenfotec.examen1.examen1.domain;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String comment;

    private Timestamp timeCreated;


}
