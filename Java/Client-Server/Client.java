import java.net.*;
import java.io.*;

public class Client {
   public static void main(String[] args) throws IOException {
      // Server initialization
      Socket server = new Socket("localhost", 4999);

      // Send Message
      PrintWriter text = new PrintWriter(server.getOutputStream());
      String messageSent = "Hello from Client";
      text.println(messageSent);
      text.flush();

      // Receieve Message
      InputStreamReader getInput = new InputStreamReader(server.getInputStream());
      BufferedReader getMessage = new BufferedReader(getInput);

      String messageReceived = getMessage.readLine();

      System.out.println("server: " + messageReceived);
   }
}