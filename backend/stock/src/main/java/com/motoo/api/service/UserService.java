package com.motoo.api.service;

import com.motoo.api.request.UpdateUserPutReq;
import com.motoo.db.entity.User;
import org.springframework.security.core.Authentication;

import java.util.Optional;


/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */



public interface UserService {

    User getUserInfo(Authentication authentication);

    Optional<User> getByUserId(Long id);

    Optional<User> getByUserEmail(String email);

    Long signupUser(String email, String nickname);

    void deleteUser(String id);

    Long updateNickname(User user, String Nickname);

    int updateUser(User user, UpdateUserPutReq updateUserPutReq);

}
