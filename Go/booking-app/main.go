package main

import (
	"fmt"
	"strings"
)

const eventName string = "Go Conference, 2022"
const totalTickets uint8 = 50
const reservedTickets uint8 = 10

var remainingTickets uint8 = totalTickets - reservedTickets
var bookings []string

func main() {
	greetUser()

	var firstName string
	var lastName string
	var email string
	var userTickets uint8

	for {
		firstName, lastName, email, userTickets = getUserInput()

		var isValidName bool
		var isValidEmail bool
		var isValidTicketNumber bool

		isValidName, isValidEmail, isValidTicketNumber = validateUserInput(firstName, lastName, email, userTickets)

		if isValidName && isValidEmail && isValidTicketNumber {
			bookings, remainingTickets = bookTicket(firstName, lastName, userTickets)

			fmt.Printf("Congratulations %v %v. You bought %v tickets. A confirmation mail will be sent to %v.\n", firstName, lastName, userTickets, email)

			var firstNamesofUsers []string = getBookedUsersName()

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

func greetUser() {
	fmt.Println("Welcome to", eventName, "booking")
	fmt.Printf("Only %v tickets left\n", remainingTickets)
	fmt.Println("Hurry up! Get your tickets now!")
}

func getUserInput() (string, string, string, uint8) {
	var firstName string
	var lastName string
	var email string
	var userTickets uint8

	fmt.Println("Enter your first name: ")
	fmt.Scan(&firstName)

	fmt.Println("Enter your last name: ")
	fmt.Scan(&lastName)

	fmt.Println("Enter your email address: ")
	fmt.Scan(&email)

	fmt.Println("How many tickets do you want: ")
	fmt.Scan(&userTickets)

	return firstName, lastName, email, userTickets
}

func validateUserInput(firstName string, lastName string, email string, userTickets uint8) (bool, bool, bool) {
	var isValidName bool = len(firstName) >= 2 && len(lastName) >= 2
	var isValidEmail bool = strings.Contains(email, "@")
	var isValidTicketNumber bool = userTickets > 0 && userTickets <= remainingTickets

	return isValidName, isValidEmail, isValidTicketNumber
}

func getBookedUsersName() []string {
	var firstNamesofUsers []string

	for _, booking := range bookings {
		var extractedFirstname = strings.Fields(booking)[0]
		firstNamesofUsers = append(firstNamesofUsers, extractedFirstname)
	}

	return firstNamesofUsers
}

func bookTicket(firstName string, lastName string, userTickets uint8) ([]string, uint8) {
	bookings = append(bookings, firstName+" "+lastName)
	remainingTickets = remainingTickets - userTickets

	return bookings, remainingTickets
}
