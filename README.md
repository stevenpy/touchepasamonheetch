![Heetch](../heetch.png)

> Enjoy your night out

#Test
> Topic: For this test we are building a survey to collect user feedback.


## Specs

###First part: Implement a french survey

> This workflow should only be displayed to a french user.

![The workflow](http://g.gravizo.com/g?
@startuml;
  %28*%29
  --> "Step 0";
  --> if "France ?" then;
    -->[true] "Step 1";
    --> if "Candy fan ?" then;
      -->[true] "step 3";
    else;
      ->[false] "step 2a";
      --> if "Night club fan ?" then;
        -->[true] "step 3";
      else;
        ->[false] "step 2b";
        --> "step 3";
      endif;
    endif;
  else;
    ->[false] "Step 0b";
  endif;
@enduml;)

**Step 0: General user information**
- Has a `country` field.

**Step 0b: Out of process**
- Has a simple `text message` saying: "Thanks for following Heetch but we are not open yet in your country :(".

**Step 1: The candy step**
- Has a `candy_fan` field.

**Step 2a: The night club step**
- Has a `night_club_fan` field.

**Step 2b: What do you like ?**
- Has a `fan_type` field.

**Step 3: Greetings**
- Has a simple `text message` to thank user for using heetch.