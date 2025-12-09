let LIST = [];
var run = true

function taskSelection(){
    console.log('\n===== TO-DO LIST MENU =====');
    console.log('1. Add a task');
    console.log('2. List all tasks');
    console.log('3. Delete a task');
    console.log('4. Mark a task as done');
    console.log('5. Exit');
    console.log('===========================');

    let perform = Number(prompt("Enter the corresponding number of LIST MENU to perform an method on you to do list"));
    if(perform == 1){
        addTask();
    }else if(perform == 2){
        listTask();
    }else if(perform == 3){
        delTask();
    }else if(perform == 4){
        markAsDone();
    }else if(perform == 5){
        console.log("Thank you  for visitng");
        run= false;
    }
} 

function printList() {
    console.log("\n===== CURRENT TO-DO LIST =====");
    LIST.forEach((item) => {
        console.log(`ID: ${item.id} | Task: ${item.task} | Status: ${item.status}`);
    });
    console.log("================================\n");
}



function listTask(){
    printList();
    console.log("ID should be greater than 0 and in increasing order staring with 1 and there should be an unique id")
    let idi = Number(prompt("Enter the id of task you wanna see"));
    console.log(`The task is ${LIST[idi-1].task}\n The status if task is ${LIST[idi-1].status}\n Its id is ${LIST[idi-1].id}`);

}

function addTask(){
    printList();
    let taski = prompt("Enter the task you wanna add");
    console.log("ID should be greater than 0 and in increasing order staring with 1 and there should be an unique id")
    let idi = Number(prompt("Enter the id of tas which should be id next to the previous task id "));
    let item = {id:idi,task:taski,status:false};
    LIST.push(item);
    printList();
    
    
}

function delTask(){
    printList();
    console.log("ID should be greater than 0 and in increasing order staring with 1 and there should be an unique id")
    let taskd = Number(prompt("Enter the id of task you wanna delete"));
    LIST.splice((taskd-1),1);
}

function markAsDone(){
    printList();
    console.log("ID should be greater than 0 and in increasing order staring with 1 and there should be an unique id")
    let taskdone = Number(prompt("Enter the id of task you completed"));
    LIST[(taskdone-1)].status = true;
    
}

while(run){
    taskSelection();
}
