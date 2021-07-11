// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

/** Servlet responsible for creating new tasks. */
@WebServlet("/new-task")
public class NewTaskServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    long timestamp = System.currentTimeMillis();

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Task");
    
    FullEntity taskEntity = Entity.newBuilder(keyFactory.newKey()).set("hc_id", 0).set("prompt", "10.4% of U.S. adults with mental illness also experienced a substance use disorder in 2019.").set("actual", "18.4% of U.S. adults with mental illness also experienced a substance use disorder in 2019.").set("comparison", "higher").set("source", "s").build();
    FullEntity taskEntity2 = Entity.newBuilder(keyFactory.newKey()).set("hc_id", 1).set("prompt", "1 in 5 people in the U.S. experience some form of mental illness each year.").set("actual", "1 in 5 people in the U.S. experience some form of mental illness each year.").set("comparison", "equal").set("source", "https://www.mentalhealthfirstaid.org/mental-health-resources/").set("timestamp", timestamp). build();
    FullEntity taskEntity3 = Entity.newBuilder(keyFactory.newKey()).set("hc_id", 2).set("prompt", "79.5% of U.S. adults with mental illness received treatment in 2019.").set("actual", "44.8% of U.S. adults with mental illness received treatment in 2019.").set("comparison", "lower").set("source", "https://www.mentalhealthfirstaid.org/mental-health-resources/").set("timestamp", timestamp).build();
    
    datastore.put(taskEntity);
    datastore.put(taskEntity2);
    datastore.put(taskEntity3);
    
    response.sendRedirect("/datastore.html");
  }
}
