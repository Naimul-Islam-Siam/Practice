package main

import (
	"fmt"
	"strings"
)

func main() {
	const eventName string = "Go Conference, 2022"
	const totalTickets uint8 = 50
	const reservedTickets uint8 = 10
	var remainingTickets uint8 = totalTickets - reservedTickets
	var bookings []string

	fmt.Println("Welcome to", eventName, "booking")
	fmt.Printf("Only %v tickets left\n", remainingTickets)
	fmt.Println("Hurry up! Get your tickets now!")

	var firstName string
	var lastName string
	var email string
	var userTickets uint8

	for {
		fmt.Println("Enter your first name: ")
		fmt.Scan(&firstName)

		fmt.Println("Enter your last name: ")
		fmt.Scan(&lastName)

		fmt.Println("Enter your email address: ")
		fmt.Scan(&email)

		fmt.Println("How many tickets do you want: ")
		fmt.Scan(&userTickets)

		var isValidName bool = len(firstName) >= 2 && len(lastName) >= 2
		var isValidEmail bool = strings.Contains(email, "@")
		var isValidTicketNumber bool = userTickets > 0 && userTickets <= remainingTickets

		if isValidName && isValidEmail && isValidTicketNumber {
			bookings = append(bookings, firstName+" "+lastName)
			remainingTickets = remainingTickets - userTickets

			fmt.Printf("Congratulations %v %v. You bought %v tickets. A confirmation mail will be sent to %v.\n", firstName, lastName, userTickets, email)

			var firstNamesofUsers []string

			for _, booking := range bookings {
				var extractedFirstname = strings.Fields(booking)[0]
				firstNamesofUsers = append(firstNamesofUsers, extractedFirstname)
			}

			fmt.Printf("%v tickets left.\n People who booked: %v.\n", remainingTickets, firstNamesofUsers)

			var noTicketsRemaining bool = remainingTickets == 0

			if noTicketsRemaining {
				fmt.Println("Tickets sold out. Hope to see you next year!")
				break
			}
		} else {
			if !isValidName {
				fmt.Println("Your first or last name is too short")
			}
			if !isValidEmail {
				fmt.Println("Enter a valid Email address.")
			}
			if !isValidTicketNumber {
				fmt.Printf("Sorry! process failed, we only have %v tickets left.\n", remainingTickets)
			}
		}
	}
}
