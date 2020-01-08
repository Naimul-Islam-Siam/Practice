import java.net.*;
import java.io.*;

public class Client {
   public static void main(String[] args) throws IOException {
      // Server initialization
      Socket server = new Socket("localhost", 4999);

      // to send data to the server
      DataOutputStream sendText = new DataOutputStream(server.getOutputStream());

      // to read data coming from the server
      BufferedReader getMessage = new BufferedReader(new InputStreamReader(server.getInputStream()));

      // to read data from the keyboard
      BufferedReader getInput = new BufferedReader(new InputStreamReader(System.in));

      String str, str1;

      // repeat as long as exit
      // is not typed at client
      System.out.println("Start Typing [Client]: ");
      while (!(str = getInput.readLine()).equals("exit")) {
         // send to the server
         sendText.writeBytes(str + "\n");

         // receive from the server
         str1 = getMessage.readLine();

         System.out.println("---Server: " + str1);

         System.out.println("Start Typing [Client]: ");
      }

      // close connection.
      sendText.close();
      getMessage.close();
      getInput.close();
      server.close();
   }
}