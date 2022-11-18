const subtitle = document.getElementsByClassName("text-card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("text-card-subtitle-word");
  
  word.style.transitionDelay = `${index * 60}ms`;
  
  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("But By Adding A Particular Intricacy to Its Design With The Help of CSS, Bulma, and JavaScript.");