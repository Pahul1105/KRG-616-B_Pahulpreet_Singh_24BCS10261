package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {

    private List<Map<String, String>> users = new ArrayList<>();

    @GetMapping("/users")
    public List<Map<String, String>> getUsers() {
        return users;
    }

    @PostMapping("/users")
    public String addUser(@RequestBody Map<String, String> user) {
        users.add(user);
        return "User added successfully";
    }
}