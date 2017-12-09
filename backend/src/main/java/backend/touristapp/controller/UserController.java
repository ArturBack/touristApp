package backend.touristapp.controller;

import backend.touristapp.models.Token;
import backend.touristapp.models.User;
import backend.touristapp.repository.UserRepository;
import org.h2.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Optional;

import static backend.touristapp.constants.ResponseConstants.FAILED_ID;
import static backend.touristapp.constants.ResponseConstants.FAILED_RESPONSE;

@Controller
public class UserController {

    private UserRepository userRepository;

    public UserController() {
    }

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    @ResponseBody
    public Token addUser(@RequestBody User user) {
        if (StringUtils.isNullOrEmpty(user.getLogin()) || StringUtils.isNullOrEmpty(user.getPassword())) {
            return new Token(FAILED_ID, FAILED_RESPONSE);
        }
        User savedUser = userRepository.save(user);
        return new Token(savedUser.getId(), savedUser.getLogin());
    }

    @RequestMapping(value = "/loginInUser", method = RequestMethod.POST)
    @ResponseBody
    public Token logInUser(@RequestBody User user) {
        if (StringUtils.isNullOrEmpty(user.getLogin()) || StringUtils.isNullOrEmpty(user.getPassword())) {
            return new Token(FAILED_ID, FAILED_RESPONSE);
        }
        Optional<User> useroOptional = userRepository.findByLogin(user.getLogin());
        if (!useroOptional.isPresent()) {
            return new Token(FAILED_ID, FAILED_RESPONSE);
        }

        User userDB = useroOptional.get();
        if (StringUtils.equals(userDB.getPassword(), user.getPassword())) {
            return new Token(userDB.getId(), userDB.getLogin());
        }
        return new Token(FAILED_ID, FAILED_RESPONSE);
    }
}
