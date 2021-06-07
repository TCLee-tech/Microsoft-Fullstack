package org.generation.WebProject.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.FormLoginConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.sql.DataSource;
import java.beans.Expression;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    //AuthenticationManagerBuilder: Allows for easily building in JDBC based authentication
    //.usersByUsernameQuery: Sets the query to be used for finding a user by their username
    //.authoritiesByUsernameQuery: Sets the query to be used for finding a user's authorities by their username.
    //username=? represents a parameter to be supplied by client

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                .dataSource(dataSource)
                .usersByUsernameQuery("select username, password, enabled from users where username=?")
                .authoritiesByUsernameQuery("select username, role from users where username=?")
        ;
    }

    /*public AuthenticationSuccessHandler myAuthenticationSuccessHandler() {
        return new SuccessHandler();
    }*/

    //to config form-based authentication, we override the configure(HttpSecurity)method
    //.antMatchers: http.antMatcher() tells Spring to only configure HttpSecurity if the path matches this pattern.
    //CSRF stands for Cross-Site Request Forgery. It is an attack that forces an end user to execute unwanted actions
    //on a web application in which they are currently authenticated.

    @CrossOrigin
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable();

        http.formLogin().loginPage("/login");

        http.formLogin()
                .defaultSuccessUrl("/productform");

        http.logout()
                .logoutSuccessUrl("/index");

        http.authorizeRequests()
                .antMatchers("/", "/products", "/aboutus").permitAll()
                .antMatchers("/productform/**").hasRole("ADMIN")
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .and()
                .logout().permitAll();

    }

    //logoutmethod to configure log-off functionality
    //This will provide the default configuration for logging out
    //For instance, the URL will be /logout and sessions will be invalidated.


    private void antMatchers(String s) {
    }
}
