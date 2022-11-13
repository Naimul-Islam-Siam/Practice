package main

import "fmt"

func main() {
	const eventName string = "Go Conference, 2022"
	const totalTickets uint8 = 50
	var remainingTickets uint8 = 30
	fmt.Println("Welcome to", eventName, "booking")
	fmt.Printf("Only %v tickets left\n", remainingTickets)
	fmt.Println("Hurry up! Get your tickets now!")

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

	remainingTickets = remainingTickets - userTickets

	fmt.Printf("Congratulations %v %v. You bought %v tickets. A confirmation mail will be sent to %v.", firstName, lastName, userTickets, email)
}
