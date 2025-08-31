1. Which way of representing the traffic light did you find better? Why? 

the second way using arrays depends on the order of the index and its indexes. if any change happened to the array order, the code needs to be update for that change because the indexs will change as well.  so if the order now is [green, orange, red], and someone changed to [red, orange, red] results of the code would be different
but in first one, it check the current color and sets exactly the next one. As an example, if the color is orange it will be always changed to red. which make it more reliable.

2. What happens if you change the loop to a do-while loop instead of a while loop? Why?

in this code there will be no difference. but if we set an initial value for cycle which is equal to while loop condition( cycle =2), then the do while loop will run one time then stops. but while loop will not run at all.

3.We could have also used a for loop to make the traffic light do 2 full rotations. Do you think that would be better? Why or why not?

let cycle = 0
for (; cycle < 2;) {
  console.log("The traffic light is on", trafficLight.currentState);

  if (trafficLight.currentState === "green") {
    trafficLight.currentState = "orange";
  } else if (trafficLight.currentState === "orange") {
    trafficLight.currentState = "red";
  } else if (trafficLight.currentState === "red") {
    trafficLight.currentState = "green";
    cycle++; 
  }
}

I don't see any diffence with the code. it will stay the same and what changes is only the structure. it still work the same way as before
