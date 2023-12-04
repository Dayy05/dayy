const gombalanList = [
    "Kamu itu segalanya deh pokoknya ayyyy. LOVE YOU SO MUCH😘😘😘😘🤭🤭🤭",

];

function generateGombalan() {
    const randomIndex = Math.floor(Math.random() * gombalanList.length);
    const gombalanElement = document.getElementById('gombalan-text');
    gombalanElement.innerText = `"${gombalanList[randomIndex]}"`;
}
