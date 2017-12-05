package backend.touristapp.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "trips")
public class Trip {

    @GeneratedValue
    @Id
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    @Lob
    private String description;

    @Column
    private String dateFrom;

    @Column
    private String dateTo;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    private Set<TripDetail> tripDetails;

    public Trip(String name, String description, String dateFrom, String dateTo, User user) {
        this.name = name;
        this.description = description;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.user = user;
    }

    @Access(AccessType.PROPERTY)
    @OneToMany(targetEntity=TripDetail.class, mappedBy = "trip", fetch=FetchType.EAGER)
    public Set<TripDetail> getTripDetails() {
        return tripDetails;
    }

    public void setTripDetails(Set<TripDetail> tripDetails) {
        this.tripDetails = tripDetails;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(String dateFrom) {
        this.dateFrom = dateFrom;
    }

    public String getDateTo() {
        return dateTo;
    }

    public void setDateTo(String dateTo) {
        this.dateTo = dateTo;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
