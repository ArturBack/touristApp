package backend.touristapp.constants;

import java.util.Collections;
import java.util.Map;

/**
 * Created by Artur on 2017-12-09.
 */
public class ResponseConstants {

    public static final String SUCCESS = "success";
    public static final String FAILED = "failed";
    public static final Map<String, String> SUCCESS_RESPONSE = Collections.singletonMap("response", "success");
    public static final Map<String, String> FAILED_RESPONSE = Collections.singletonMap("response", "success");

    public static final long FAILED_ID = -1;

}
