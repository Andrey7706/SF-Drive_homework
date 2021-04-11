export default function collapsible() {
    let coll = document.querySelectorAll('.collapsible-button');
    coll.forEach(btn => {
        btn.addEventListener('click', function() {
            coll[i].classList.toggle('active');
            let content = coll[i].nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    });
}



