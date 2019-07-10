import { Component, OnInit } from '@angular/core';
import {GoalService} from '../goals/goal.service';
import{Goal} from '../goal';
import {Goals} from '../goals'
import {AlertsService} from '../alert-service/alerts.service'
import {Quote} from '../quote-class/quote'
import {HttpClient} from '@angular/common/http'

// import {Quote} from '../quote-class/quote'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService], 
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  
  
  //  goals = Goals;

  goals:Goal[];
  alertService:AlertsService;

  
    // goals:Goal[] = [
    //     new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2018,3,14)),
    //     new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2018,6,9)),
    //     new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2018,1,12)),
    //     new Goal(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2018,0,18)),
    //     new Goal(5, 'Solve math homework','Damn Math',new Date(2018,2,14) ),
    //     new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,7,14)),

    // ];
    addNewGoal(goal){
     let goalLength = this.goals.length;
     goal.id=goalLength++;
     goal.completeDate = new Date(goal.completeDate)
     this.goals.push(goal)
     alert('goal added successfully')

 }

    deleteGoal(isComplete, index){
      if(isComplete){
        let toDelete=confirm(`Are you sure you wanna delete ${this.goals[index.name]}`)

        if(toDelete){
          this.goals.splice(index,1)
          this.alertService.alertMe("Goal has been deleted")
        }
      }
    }
    toogleDetails(index){
        this.goals[index].showDescription = !this.goals[index].showDescription;
    }

    completeGoal(isComplete,index){
        if (isComplete){
            this.goals.splice(index,1);
        }
      }


      
      constructor(goalService:GoalService,alertService:AlertsService,private http:HttpClient) {
        this.goals = goalService.getGoals();
        this.alertService = alertService;//make the service available to the class
         }
   
  ngOnInit() {
    this.http.get("http://quotes.stormconsultancy.co.uk/random.json (Links to an external site.)").subscribe(data=>{
      // Successful API request.
  })
}
}
