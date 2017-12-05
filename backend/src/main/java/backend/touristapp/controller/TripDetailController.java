package backend.touristapp.controller;

import backend.touristapp.repository.TripDetailRepository;
import backend.touristapp.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Artur on 2017-12-05.
 */
public class TripDetailController {

    private TripDetailRepository tripDetailRepository;
    private TripRepository tripRepository;

    public TripDetailController() {
    }

    @Autowired
    public TripDetailController(TripDetailRepository tripDetailRepository, TripRepository tripRepository) {
        this.tripDetailRepository = tripDetailRepository;
        this.tripRepository = tripRepository;
    }
}
