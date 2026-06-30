let container = document.getElementById("container")



function addItem(){
    let input = document.getElementById('input')
    let Descinput = document.getElementById('input2')


    if (input.value.trim() === "") return;


    let li = document.createElement('li');

    li.className = "flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl shadow-xs transition-all duration-200 hover:bg-gray-100 animate-fadeIn";


    let textSpan = document.createElement('span');
    textSpan.innerText = input.value;
    textSpan.className = "text-gray-700 font-medium break-all pr-4";
    li.append(textSpan);


    let DesctextSpan = document.createElement('span');
    DesctextSpan.innerText = Descinput.value;
    DesctextSpan.className = "text-gray-500 font-small break-all pr-4";
    li.append(DesctextSpan);

    let button = document.createElement('button')
    button.innerText = "✕"


    button.className = "flex items-center justify-center w-8 h-8 rounded-lg text-red-500 hover:text-white hover:bg-red-500 active:scale-95 transition-all duration-150 cursor-pointer text-sm font-bold shrink-0";

    button.onclick = () => {
        li.remove();
    };

    li.append(button)
    container.append(li);


    input.value = ""
    Descinput.value = ""
    input.focus();
}

