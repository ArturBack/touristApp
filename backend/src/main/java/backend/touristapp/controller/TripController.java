package backend.touristapp.controller;

import backend.touristapp.repository.TripRepository;
import backend.touristapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Artur on 2017-12-05.
 */
public class TripController {

    private UserRepository userRepository;
    private TripRepository tripRepository;

    public TripController() {
    }

    @Autowired
    public TripController(UserRepository userRepository, TripRepository tripRepository) {
        this.userRepository = userRepository;
        this.tripRepository = tripRepository;
    }
}
