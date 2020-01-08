import java.net.*;
import java.io.*;

public class Server {
   public static void main(String[] args) throws IOException {
      // Server Initialization
      ServerSocket serverMain = new ServerSocket(4999);

      // Connect to client socket
      Socket server = serverMain.accept();
      System.out.println("Client Connected");

      // to send data to the client
      PrintStream text = new PrintStream(server.getOutputStream());

      // to read data coming from the client
      BufferedReader getMessage = new BufferedReader(new InputStreamReader(server.getInputStream()));

      // to read data from the keyboard
      BufferedReader getInput = new BufferedReader(new InputStreamReader(System.in));

      // server executes continuously
      while (true) {
         String str, str1;
         // repeat as long as the client
         // does not send a null string

         // read from client
         while ((str = getMessage.readLine()) != null) {
            System.out.println("---Client: " + str);
            System.out.println("Start typing [Server]: ");
            str1 = getInput.readLine();

            // send to client
            text.println(str1);
         }

         // close connection
         text.close();
         getMessage.close();
         getInput.close();
         serverMain.close();
         server.close();

         // terminate application
         System.exit(0);
      }
   }
}