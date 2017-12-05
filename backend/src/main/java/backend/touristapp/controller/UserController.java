package backend.touristapp.controller;

import backend.touristapp.models.User;
import backend.touristapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    private UserRepository userRepository;

    public UserController() {
    }

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/addUser")
    @ResponseBody
    public String addUser() {
        userRepository.save(new User("ArturBack", "haslo"));
        User user = userRepository.findOne(1L);
        return user.getLogin() + " " + user.getPassword();
    }

}
