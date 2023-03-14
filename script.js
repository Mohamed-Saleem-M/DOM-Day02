function labels(tagName, attrName, attrValue, content) {
    var ele = document.createElement(tagName);
    ele.setAttribute(attrName, attrValue);
    ele.innerHTML = content;
    return ele;
}

function inputs(tagName, attrName, attrValue, attrName1, attrValue1, attrName2, attrValue2, attrName3, attrValue3) {
    var ele1 = document.createElement(tagName);
    ele1.setAttribute(attrName, attrValue);
    ele1.setAttribute(attrName1, attrValue1);
    ele1.setAttribute(attrName2, attrValue2);
    ele1.setAttribute(attrName3, attrValue3);
    return ele1;
}

function lineBreak(tagName) {
    var br = document.createElement(tagName);
    return br;
}

var firstName = labels("label", "for", "firstName", "First Name");
var br = lineBreak("br");
var input1 = inputs("input", "type", "text", "name", "First Name", "id", "firstName", "placeholder", "Enter your First Name");
var br1 = lineBreak("br");

var middleName = labels("label", "for", "middleName", "Middle Name");
var br2 = lineBreak("br");
var input2 = inputs("input", "type", "text", "name", "Middle Name", "id", "middleName", "placeholder", "Enter your Middle Name");
var br3 = lineBreak("br");

var lastName = labels("label", "for", "lastName", "Last Name");
var br4 = lineBreak("br");
var input3 = inputs("input", "type", "text", "name", "Last Name", "id", "lastName", "placeholder", "Enter your Last Name");
var br5 = lineBreak("br");

var email = labels("label", "for", "email", "E-mail");
var br6 = lineBreak("br");
var input4 = inputs("input", "type", "text", "name", "E-mail", "id", "email", "placeholder", "Enter your Email");
var br7 = lineBreak("br");

var password = labels("label", "for", "password", "Password");
var br8 = lineBreak("br");
var input5 = inputs("input", "type", "text", "name", "Password", "id", "password", "placeholder", "Enter your Password");
var br9 = lineBreak("br");

document.body.append(firstName, br, input1, br1, middleName, br2, input2, br3, lastName, br4, input3, br5, email, br6, input4, br7, password, br8, input5, br9);