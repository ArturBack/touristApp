package backend.touristapp.repository;

import backend.touristapp.models.TripDetail;
import org.springframework.data.repository.CrudRepository;

public interface TripDetailRepository extends CrudRepository<TripDetail, Long> {
}
