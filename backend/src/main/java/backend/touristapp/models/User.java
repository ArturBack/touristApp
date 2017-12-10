package backend.touristapp.models;


import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    @GeneratedValue
    @Id
    private Long id;

    @Column(nullable = false, unique = true)
    private String login;

    @Column(nullable = false)
    private String password;

    private Set<Trip> trips;

    public User() {
    }

    public User(String login, String password) {
        this.login = login;
        this.password = password;
    }

    @Access(AccessType.PROPERTY)
    @OneToMany(targetEntity=Trip.class, mappedBy = "user", fetch=FetchType.EAGER)
    public Set<Trip> getTrips() {
        return trips;
    }

    public void setTrips(Set<Trip> trips) {
        this.trips = trips;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
