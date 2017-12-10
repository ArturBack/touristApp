package backend.touristapp.controller;

import backend.touristapp.models.Trip;
import backend.touristapp.models.TripDetail;
import backend.touristapp.repository.TripDetailRepository;
import backend.touristapp.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collections;
import java.util.Map;
import java.util.Set;

import static backend.touristapp.constants.ResponseConstants.FAILED_RESPONSE;
import static backend.touristapp.constants.ResponseConstants.SUCCESS_RESPONSE;

@Controller
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
    @RequestMapping(value = "/getTripDetails", method = RequestMethod.GET)
    @ResponseBody
    public Set<TripDetail> getTripDetails(@RequestParam(value = "tripID") long tripID) {
        Trip trip = tripRepository.findOne(tripID);
        if (trip != null) {
            return trip.getTripDetails();
        }
        return Collections.emptySet();
    }

    @RequestMapping(value = "/addTripDetail", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, String> addNewTrip(@RequestParam(value = "tripId") long tripId,
                                          @RequestParam(value = "name") String name,
                                          @RequestParam(value = "description", required = false, defaultValue = "") String description,
                                          @RequestParam(value = "dateFrom", required = false, defaultValue = "") String dateFrom,
                                          @RequestParam(value = "dateTo", required = false, defaultValue = "") String dateTo,
                                          @RequestParam(value = "latitude", required = false) Double latitude,
                                          @RequestParam(value = "longitude", required = false) Double longitude) {

        Trip trip = tripRepository.findOne(tripId);
        if (trip == null) {
            return FAILED_RESPONSE;
        }
        TripDetail tripDetail = new TripDetail(name, description, dateFrom, dateTo, latitude, longitude, trip);
        tripDetailRepository.save(tripDetail);

        return SUCCESS_RESPONSE;
    }

}
