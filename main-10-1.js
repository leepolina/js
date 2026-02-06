// function functionName(arguments1, arguments2, argument22){
// return arguments1 + arguments2 + argument22
// }

// const functionName = function(arguments1, arguments2, argument22){

// }

const emails = ["test@gmail.com", " admin@site.com", "user@mail.ua"];

const isValidEmail = function (email) {
  return email.includes("@") && email.length >= 6 && email.length <= 30;
  // will return true or false
};
const isUniqueEmail = function (emails, email) {
  return !emails.includes(email);
};

const addEmail = function (emailsAll, email) {
  if (!isValidEmail(email)) {
    return "емейл не валідний не містить равлика або 6-30 символів";
  }
  if (!isUniqueEmail(emailsAll)) {
    return "емейл не унікальний";
  }
  emailsAll.push(email);
  return "емейл додано";
};
console.log(addEmail(emails, "new@mail.com"));
console.log(addEmail(emails, "test@gmail.com"));
console.log(addEmail(emails, "badmail"));
