package net.siddhant.ems.config;

import net.siddhant.ems.entity.Employee;
import net.siddhant.ems.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner loadData(EmployeeRepository repository) {
        return args -> {
            repository.save(new Employee(null, "Siddhant", "Dhomne", "siddhant@gmail.com"));
        };
    }
}