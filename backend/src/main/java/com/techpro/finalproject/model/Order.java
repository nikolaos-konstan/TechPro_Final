package com.techpro.finalproject.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name="OrderID")
    private Long orderId;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne
    @JoinColumn(name="PersonID")
    private People people;

    //@Column(name="PersonID")
    //private Long personID;

    @Column(name="OrderDate")
    private LocalDateTime orderDate;

    @PrePersist
    private void setOrderDate() {
        this.orderDate = LocalDateTime.now();
    }
}
