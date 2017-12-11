package backend.touristapp.controller;

import backend.touristapp.models.Token;
import backend.touristapp.models.User;
import backend.touristapp.repository.UserRepository;
import org.h2.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import static backend.touristapp.constants.ResponseConstants.FAILED;
import static backend.touristapp.constants.ResponseConstants.FAILED_ID;

@RestController
public class UserController {

    private UserRepository userRepository;

    public UserController() {
    }

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @PostMapping("/addUser")
    @CrossOrigin(origins = "http://localhost:4200")
    public Token addUser(@RequestBody User user) {
        if (StringUtils.isNullOrEmpty(user.getLogin()) || StringUtils.isNullOrEmpty(user.getPassword())) {
            return new Token(FAILED_ID, FAILED);
        }
        Optional<User> userDB = userRepository.findByLogin(user.getLogin());
        if(!userDB.isPresent()) {
            User savedUser = userRepository.save(user);
            return new Token(savedUser.getId(), savedUser.getLogin());
        }
        return new Token(FAILED_ID, FAILED);
    }

    @PostMapping("/logInUser")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public Token logInUser(@RequestBody User user) {
        if (StringUtils.isNullOrEmpty(user.getLogin()) || StringUtils.isNullOrEmpty(user.getPassword())) {
            return new Token(FAILED_ID, FAILED);
        }
        Optional<User> useroOptional = userRepository.findByLogin(user.getLogin());
        if (!useroOptional.isPresent()) {
            return new Token(FAILED_ID, FAILED);
        }

        User userDB = useroOptional.get();
        if (StringUtils.equals(userDB.getPassword(), user.getPassword())) {
            return new Token(userDB.getId(), userDB.getLogin());
        }
        return new Token(FAILED_ID, FAILED);
    }
}
