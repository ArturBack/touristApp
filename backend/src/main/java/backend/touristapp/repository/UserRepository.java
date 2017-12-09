package backend.touristapp.repository;


import backend.touristapp.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    @Query("SELECT u FROM User u where u.login = :login")
    Optional<User> findByLogin(@Param("login") String login);
}
