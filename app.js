function talk(){
    var know = {
        "who are you": "Hello, Codewith_random here",
        "how are you": "Good :)",
        "what can i do for you": "Search CodeWithRandom on Google>>Thank Me Later",
       
        "your followers": "I have my family of 200000 members, i don't have followers, have supportive Family",
       "I am depressed what should i do": "I'm really sorry to hear that you're feeling this way, but I can't provide the help that you need. ",
        bye: "Okay! Will meet soon , have a good day..",
    };

    var user = document.getElementById("userBox").value;

    document.getElementById("chatlog").innerHTML = user + "<br>";

    if(user in know) {
        document.getElementById("chatlog").innerHTML = know[user] + "<br>";

    }
    else{
        document.getElementById("chatlog").innerHTML ="Sorry,I didn't understand <br>";
    }
}