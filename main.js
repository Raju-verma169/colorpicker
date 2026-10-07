const colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7",
    "#DDA0DD", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E9",
    "#F1948A", "#73C6B6", "#F8C471", "#7FB3D5", "#A569BD",
    "#52BE80", "#EC7063", "#5DADE2", "#F4D03F", "#AF7AC5",
    "#48C9B0", "#EB984E", "#5499C7", "#CD6155", "#58D68D",
    "#F5B041", "#7DCEA0", "#5B9BD5", "#C39BD3", "#F0B27A",
    "#76D7C4", "#EC407A", "#26A69A", "#42A5F5", "#AB47BC",
    "#FFA726", "#66BB6A", "#EF5350", "#29B6F6", "#7E57C2",
    "#FF7043", "#26C6DA", "#9CCC65", "#FFCA28", "#8D6E63",
    "#78909C", "#D4AC0D", "#1ABC9C", "#3498DB", "#9B59B6",
    "#E74C3C", "#2ECC71", "#F39C12", "#16A085", "#2980B9",
    "#8E44AD", "#C0392B", "#27AE60", "#D35400", "#2C3E50",
    "#E67E22", "#1ABC9C", "#34495E", "#F1C40F", "#E84393",
    "#00B894", "#0984E3", "#6C5CE7", "#FD79A8", "#00CEC9",
    "#FDCB6E", "#E17055", "#74B9FF", "#A29BFE", "#55EFC4",
    "#81ECEC", "#FAB1A0", "#FF7675", "#636E72", "#B2BEC3",
    "#00A8FF", "#9C88FF", "#FBC531", "#4CD137", "#487EB0",
    "#E84118", "#8C7AE6", "#44BD32", "#0097E6", "#F5F6FA",
    "#273C75", "#C23616", "#7F8FA6", "#718093", "#192A56",
    "#D63031", "#0984E3", "#6C5CE7", "#00B894", "#FDCB6E"
];
 let boxes=document.getElementsByClassName("box")
//  console.log(boxes)
//  boxes[0].style.backgroundColor="red"
//  boxes[1].style.backgroundColor="blue"
//  boxes[2].style.backgroundColor="gray"
//  boxes[3].style.backgroundColor="pink"
//  boxes[4].style.backgroundColor="yellow"
//  boxes[5].style.backgroundColor="violet"
// boxes[0].style.backgroundColor=colors[0]
// boxes[1].style.backgroundColor=colors[1]
// boxes[1].style.backgroundColor=colors[2]
// boxes[1].style.backgroundColor=colors[3]
// boxes[1].style.backgroundColor=colors[4]
// boxes[1].style.backgroundColor=colors[5]
boxes[0].style.backgroundColor=colors[parseInt(Math.random()*99)]
boxes[1].style.backgroundColor=colors[parseInt(Math.random()*99)]
boxes[2].style.backgroundColor=colors[parseInt(Math.random()*99)]
boxes[3].style.backgroundColor=colors[parseInt(Math.random()*99)]
boxes[4].style.backgroundColor=colors[parseInt(Math.random()*99)]
boxes[5].style.backgroundColor=colors[parseInt(Math.random()*99)]
