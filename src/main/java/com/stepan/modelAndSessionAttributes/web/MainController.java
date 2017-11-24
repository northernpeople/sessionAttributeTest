package com.stepan.modelAndSessionAttributes.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
	
	@GetMapping("/")
	public String getMain(){ 
		System.out.println("controller invoked");
		return "main"; 
	}

}
