package com.stepan.modelAndSessionAttributes.web;

import java.util.Enumeration;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

@Controller
@RequestMapping("/user")
@SessionAttributes({"candidate"}) // adds candidate to session, as soon as getForm is called
public class UserController {
	
	@GetMapping
	public String getForm(Model m){
		User u = new User();
		m.addAttribute("user", u); // not in session
		m.addAttribute("candidate", new User("candidate 1")); // in session
		return "user_form";
	}
	
	
	@PostMapping
	public String saveForm(@ModelAttribute User user, Model m, SessionStatus status, HttpSession session){
//		status.setComplete(); // removes attributes from session	
//		Enumeration<String> e = session.getAttributeNames();
//		while (e.hasMoreElements()){ System.out.println( e.nextElement()); }
		System.out.println("candidate from session: "+ session.getAttribute("candidate"));
		System.out.println("user from session: "+ session.getAttribute("user"));  
		System.out.println("user from form: "+ user);
		return "redirect:/user";
	}

}
