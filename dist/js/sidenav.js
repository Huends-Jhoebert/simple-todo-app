// !when sidenav is open
export function openNav() {
   document.querySelector(".new-task-btn").style.display = "none";
   document.getElementById("mySidenav").style.width = "30%";
   document.getElementById("mySidenav").style.height = "648%";
   //document.getElementById("main").style.marginLeft = "250px";
   //    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

// !when sidenav is closed
export function closeNav() {
   document.querySelector(".new-task-btn").style.display = "inline-block";
   document.getElementById("mySidenav").style.width = "0";
   //    document.getElementById("main").style.marginLeft = "0";
   //    document.body.style.backgroundColor = "white";
}
