package com.stepan.modelAndSessionAttributes.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {
	
	
	@ModelAttribute("user")       // adding user before every method in this controller
	public void addUser(Model m){
		m.addAttribute("user", new User());
	}
	
	@GetMapping
	public String getForm(Model m){
//		m.addAttribute("user", new User());
		return "user_form";
	}
	
	@PostMapping
	public String saveForm(@ModelAttribute User user, Model m){
		System.out.println("got user: "+ user);
		return "redirect:/user";
	}

}
