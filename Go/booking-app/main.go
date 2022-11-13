package main

import "fmt"

func main() {
	const eventName = "Go Conference, 2022"
	const totalTickets = 50
	var remainingTickets = 30
	fmt.Println("Welcome to", eventName, "booking")
	fmt.Printf("Only %v tickets left\n", remainingTickets)
	fmt.Println("Hurry up! Get your tickets now!")
}
