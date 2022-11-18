package main

import (
	"booking-app/helper"
	"fmt"
	"sync"
	"time"
)

type UserData struct {
	firstName       string
	lastName        string
	email           string
	numberOfTickets uint8
}

const eventName string = "Go Conference, 2022"
const totalTickets uint8 = 50
const reservedTickets uint8 = 10

var remainingTickets uint8 = totalTickets - reservedTickets
var bookings = make([]UserData, 0)
var wg = sync.WaitGroup{}

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

		isValidName, isValidEmail, isValidTicketNumber = helper.ValidateUserInput(firstName, lastName, email, userTickets, remainingTickets)

		if isValidName && isValidEmail && isValidTicketNumber {
			bookings, remainingTickets = bookTicket(firstName, lastName, email, userTickets)

			fmt.Printf("Congratulations %v %v. You bought %v tickets. A confirmation mail will be sent to %v.\n", firstName, lastName, userTickets, email)

			wg.Add(1)                                              // number of threads to wait for
			go sendTicket(userTickets, firstName, lastName, email) // go routine

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
	wg.Wait()
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

func getBookedUsersName() []string {
	var firstNamesofUsers []string

	for _, booking := range bookings {
		var extractedFirstname = booking.firstName
		firstNamesofUsers = append(firstNamesofUsers, extractedFirstname)
	}

	return firstNamesofUsers
}

func bookTicket(firstName string, lastName string, email string, userTickets uint8) ([]UserData, uint8) {
	var userData = UserData{
		firstName:       firstName,
		lastName:        lastName,
		email:           email,
		numberOfTickets: userTickets,
	}

	bookings = append(bookings, userData)
	remainingTickets = remainingTickets - userTickets

	return bookings, remainingTickets
}

func sendTicket(numberOfTickets uint8, firstName string, lastName string, email string) {
	time.Sleep(5 * time.Second)
	var ticket = fmt.Sprintf("%v tickets for %v %v", numberOfTickets, firstName, lastName)

	fmt.Println("---------------")
	fmt.Printf("Sent %v\n to: %v\n", ticket, email)
	fmt.Println("---------------")

	wg.Done()
}
