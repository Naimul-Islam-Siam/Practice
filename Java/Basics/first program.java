import java.util.Scanner;

class Main {
	public static void main(String[] args) {
    	System.out.println("Hello world!");
		greeting();
		
		int total = sum();
		System.out.println(total);
	}
	
	static void greeting() {
		System.out.println("Hey what's up");
	}

	static int sum() {
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter 1st num = ");
		int num1 = input.nextInt();

		System.out.print("Enter 2nd num = ");
		int num2 = input.nextInt();
		
		input.close();
		
		int sum = num1 + num2;

		return sum;
	}
}