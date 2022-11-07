package com.motoo.db.entity;


import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;
import java.util.Date;


/**
 * 유저 모델 정의.
 */
@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user")
public class User {


    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long userId;

    @Builder.Default
    @JsonIgnore
    @OneToMany(mappedBy = "user", orphanRemoval = true)
    private List<Account> account = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "school_id")
    private School school;

    @OneToMany(mappedBy = "user", orphanRemoval = true)
    private List<FavoriteStock> favoriteStocks = new ArrayList<>();

    private String email;

    private String nickname;

    private String role;

    private int current;

    private Date quizDay;

    public void createUser(String email, String nickname){
        this.email = email;
        this.nickname = nickname;
    }

    public void createCurrent(int current) {
        this.current = current;
    }



    public void updateCurrent(int current){
        this.current = current;
    }

    public void updateQuizDay(Date quizDay) {
        this.quizDay = quizDay;
    }

    public void updateNickname(String nickname){
        this.nickname = nickname;
    }

    public void updateSchool(School school) { this.school = school; }


}
