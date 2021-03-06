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

package com.google.sps.data;

/** An item on a todo list. */
public final class Task {

  private final long id;
  private final long hc_id;
  private final String prompt;
  private final String actual;
  private final String comparison;
  private final String source;
  private final String sourceURL;

  public Task(long id, long hc_id, String prompt, String actual, String comparison, String source, String sourceURL) {
    this.id = id;
    this.hc_id = hc_id;
    this.prompt = prompt;
    this.actual = actual;
    this.comparison = comparison;
    this.source = source;
    this.sourceURL = sourceURL;
  }
}
