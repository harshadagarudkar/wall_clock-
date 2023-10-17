setInterval(()=>{

    let hr=document.getElementById("hrs")
    let mn=document.getElementById("min")
    let sc=document.getElementById("sec")
let time=new Date()
let hours_store=time.getHours()
let minutes_store=time.getMinutes()
let second_store=time.getSeconds()



let c_h_r=30*hours_store+minutes_store/2;
let c_m_r=6*minutes_store
let c_s_r=6*second_store



hr.style.transform=`rotate(${c_h_r}deg)`;
mn.style.transform=`rotate(${c_m_r}deg)`;
sc.style.transform=`rotate(${c_s_r}deg)`;


},1000)
