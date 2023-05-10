package com.OTP.OTP.OTPController;

import com.OTP.OTP.DTO.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class OTPController {

    @Autowired
    private JavaMailSender javaMailSender;

    @PostMapping("/generate")
    public void generatePassword(@RequestBody EmailRequest request){
        String email = request.getEmail();
        String codigo = request.getCodigo();

        String subject = "Nueva contraseña generada";
        String message = "Su código temporal es: " + codigo;

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom("silosabia3@gmail.com");
        mailMessage.setTo(email);
        mailMessage.setSubject(subject);
        mailMessage.setText(message);
        javaMailSender.send(mailMessage);
    }

}