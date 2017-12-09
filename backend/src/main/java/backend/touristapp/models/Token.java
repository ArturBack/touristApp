package backend.touristapp.models;

import java.util.Date;

/**
 * Created by Artur on 2017-12-09.
 */
public class Token {

    private long id;
    private String login;
    private Date loginDate;

    public Token(long id, String login) {
        this.id = id;
        this.login = login;
        this.loginDate = new Date();
    }
}
