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

createSubtitle("But By Adding CSS, Bulma, and JavaScript, I Also Add A Little Pizazze To It.");