import java.net.*;
import java.io.*;

public class Server {
   public static void main(String[] args) throws IOException {
      // Server Initialization
      ServerSocket serverMain = new ServerSocket(4999);
      Socket server = serverMain.accept();

      System.out.println("Client Connected");

      // Receive Message
      InputStreamReader getInput = new InputStreamReader(server.getInputStream());
      BufferedReader getMessage = new BufferedReader(getInput);

      String messageReceived = getMessage.readLine();

      System.out.println("client: " + messageReceived);

      // Send Message
      PrintWriter text = new PrintWriter(server.getOutputStream());
      String messageSent = "Hello from Server";
      text.println(messageSent);
      text.flush();
   }
}