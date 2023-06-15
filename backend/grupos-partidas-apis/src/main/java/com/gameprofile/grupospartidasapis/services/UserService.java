package com.gameprofile.grupospartidasapis.services;
import com.gameprofile.grupospartidasapis.dto.UserDto;
import com.gameprofile.grupospartidasapis.entities.User;
import java.util.List;

public interface UserService {
    void saveUser(UserDto userDto);

    User findUserByEmail(String email);

    List<UserDto> findAllUsers();
}