package com.google.sps.servlets;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  private final ArrayList<String> quotes = new ArrayList<String>() {
    {
      add(
          "Wikipedia is the best thing ever. Anyone in the world can write anything they want about "+
          "any subject. So you know you are getting the best possible information. -Michael Scott");
      add(
          "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find "+
          "it along the way. -Michael Scott");
      add(
        "I'm not superstitious but I am a little stitious. -Michael Scott");
    }
  };

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Convert the quotes to json.
    String json = convertToJsonUsingGson(quotes);

    // Send the json as a response.
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /** Converts an ArrayList<String> instance into a JSON string using the Gson library. */
  private String convertToJsonUsingGson(ArrayList<String> quotes) {
    Gson gson = new Gson(); 
    String json = gson.toJson(quotes, new TypeToken<ArrayList<String>>(){}.getType());
    return json;
  }
}
