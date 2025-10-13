let person = "Enrlled Member";
let accessLevel;

switch (person) {
    case "Employee":
        accessLevel = "You are authorized to access Dietary Service";
        break;
    case "Enrolled Member":
        accessLevel = "You are authorized to access Dietary Service AND 1-1 interaction with a dietician";
        break;
    case "Subscriber":
        accessLevel = "You have partial access to Dietary Services Only";
        break;
    case "Non-Subscriber":
        accessLevel = "Please enroll or subscribe first to avail the facility";
        break;
    default: 
        accessLevel = "You do not have access. Please reach out to the admin";
}

console.log("Access Provided: ", accessLevel)