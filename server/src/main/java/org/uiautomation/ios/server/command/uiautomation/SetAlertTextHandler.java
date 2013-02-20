/*
 * Copyright 2013 ios-driver committers.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package org.uiautomation.ios.server.command.uiautomation;

import org.json.JSONException;
import org.json.JSONObject;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.Keyboard;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.remote.Response;
import org.uiautomation.ios.UIAModels.UIASecureTextField;
import org.uiautomation.ios.UIAModels.UIATextField;
import org.uiautomation.ios.UIAModels.predicate.OrCriteria;
import org.uiautomation.ios.UIAModels.predicate.TypeCriteria;
import org.uiautomation.ios.client.uiamodels.impl.RemoteUIAAlert;
import org.uiautomation.ios.communication.WebDriverLikeRequest;
import org.uiautomation.ios.server.IOSDriver;
import org.uiautomation.ios.server.command.BaseNativeCommandHandler;
import org.uiautomation.ios.server.command.BaseWebCommandHandler;


public class SetAlertTextHandler extends BaseNativeCommandHandler {

  public SetAlertTextHandler(IOSDriver driver,
                             WebDriverLikeRequest request) {
    super(driver, request);

  }

  @Override
  public JSONObject configurationDescription() throws JSONException {
    return noConfigDefined();
  }

  @Override
  public Response handle() throws Exception {
    RemoteUIAAlert alert = new RemoteUIAAlert(getSession().getNativeDriver(), "3");
    String value = getRequest().getPayload().getString("text");

    // check the alert is actually a prompt.
    try {
      UIATextField
          prompt =
          alert.findElement(new OrCriteria(new TypeCriteria(UIATextField.class),
                                           new TypeCriteria(UIASecureTextField.class)));
      Keyboard keyboard = getSession().getNativeDriver().getKeyboard();
      keyboard.sendKeys(value);
    } catch (NoSuchElementException e) {
      throw new ElementNotVisibleException("the alert doesn't accept inputs.");
    }

    // prompt.setValue(value);

    return createResponse("");
  }
}
