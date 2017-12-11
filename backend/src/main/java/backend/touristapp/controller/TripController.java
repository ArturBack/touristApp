package backend.touristapp.controller;

import backend.touristapp.models.Trip;
import backend.touristapp.models.User;
import backend.touristapp.repository.TripRepository;
import backend.touristapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import static backend.touristapp.constants.ResponseConstants.FAILED_RESPONSE;
import static backend.touristapp.constants.ResponseConstants.SUCCESS_RESPONSE;

/**
 * Created by Artur on 2017-12-05.
 */
@Controller
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

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/getUserTrips", method = RequestMethod.GET)
    @ResponseBody
    public Set<Trip> getUserTrips(@RequestParam(value = "userId") long userId) {
        User user = userRepository.findOne(userId);
        if (user != null) {
            Set<Trip> trips = user.getTrips();
            if (trips != null) {
                return trips;
            }
            return Collections.emptySet();
        }
        return Collections.emptySet();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/addTrip", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, String> addNewTrip(@RequestParam(value = "userId") long userId,
                          @RequestParam(value = "name") String name,
                          @RequestParam(value = "description", required = false, defaultValue = "") String description,
                          @RequestParam(value = "dateFrom", required = false, defaultValue = "") String dateFrom,
                          @RequestParam(value = "dateTo", required = false, defaultValue = "") String dateTo) {
        User user = userRepository.findOne(userId);
        if (user == null) {
            return FAILED_RESPONSE;
        }
        Trip trip = new Trip(name, description, dateFrom, dateTo, user);
        tripRepository.save(trip);

        return SUCCESS_RESPONSE;
    }
}
