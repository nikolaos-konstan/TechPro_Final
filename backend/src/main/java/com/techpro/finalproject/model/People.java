package com.techpro.finalproject.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="people")
public class People {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name="PersonID")
    private Long personId;
    @Column (name="FirstName")
    private String firstName;
    @Column (name="LastName")
    private String lastName;
    @Column (name="Email")
    private String email;
}
