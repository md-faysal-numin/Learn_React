function customRender(reactEl,root){

    /*
    const domEl = document.createElement(reactEl.type);
    domEl.innerHTML = reactEl.children;
    domEl.setAttribute("href",reactEl.props.href);
    domEl.setAttribute("target",reactEl.props.target);

    root.appendChild(domEl);
    */
   
   const domEl = document.createElement(reactEl.type);
   domEl.innerHTML = reactEl.children;
   for(const prop in reactEl.props){
    //    if(prop==children) continue;
       domEl.setAttribute(prop,reactEl.props[prop]);
    }
    root.appendChild(domEl);

}

const reactEl = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit GOOGLE"
}



const root = document.querySelector('#root');

customRender(reactEl,root);