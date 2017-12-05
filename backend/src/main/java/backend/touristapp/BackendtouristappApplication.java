package backend.touristapp;

import backend.touristapp.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
@ComponentScan
@EnableJpaRepositories
public class BackendtouristappApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendtouristappApplication.class, args);
	}

}
