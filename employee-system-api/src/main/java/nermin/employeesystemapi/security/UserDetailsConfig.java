package nermin.employeesystemapi.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Configuration
public class UserDetailsConfig {

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                // Implement logic to load user details from your repository or database
                // You can replace this example with your actual user retrieval logic
                if ("user".equals(username)) {
                    return User.withUsername("user")
                            .password("{noop}password") // Use proper password encoding
                            .roles("USER")
                            .build();
                } else {
                    throw new UsernameNotFoundException("User not found.");
                }
            }
        };
    }
}
