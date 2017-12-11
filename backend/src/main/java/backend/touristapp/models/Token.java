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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Date getLoginDate() {
        return loginDate;
    }

    public void setLoginDate(Date loginDate) {
        this.loginDate = loginDate;
    }
}
