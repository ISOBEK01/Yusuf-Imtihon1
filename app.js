const inputEl = document.querySelector(".input");
const closeIconEl = document.querySelector(".bi-x");
const formEl = document.querySelector(".form");
const taskEl = document.querySelector(".task");
const allDeleteEl = document.querySelector(".all_delete_btn");
const tablEl = document.querySelector(".tabl");


closeIconEl.addEventListener("click", () => {
  inputEl.value = "";
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = new Date();

  let fullTime = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();



  const divEl = document.createElement("div");
  const divBtnEl = document.createElement("div");
  const btnCompleteEl = document.createElement("button");
  const EditbtnEl = document.createElement("button");
  const soatibtnEl = document.createElement("button");
  const DeleteibtnEl = document.createElement("button");



  const pEl = document.createElement("p");


  btnCompleteEl.innerHTML = `<i class="bi bi-check2-circle"></i> <br> Complite`;
  EditbtnEl.innerHTML = `<i class="bi bi-pencil-square"></i> <br> Edit`;
  soatibtnEl.innerHTML = `<i class="bi bi-alarm"></i> <br>${fullTime}`;
  DeleteibtnEl.innerHTML = `<i class="bi bi-trash3"></i> <br> Delete`;


  divEl.className = "task_card";
  pEl.className = "task_name";
  divBtnEl.className = "btn_group";
  btnCompleteEl.className = "comp_btn";
  EditbtnEl.className = "comp";
  soatibtnEl.className = "compe";
  DeleteibtnEl.className = "compel";








  pEl.innerHTML = inputEl.value;
  divEl.appendChild(pEl);
  divBtnEl.appendChild(btnCompleteEl);
  divBtnEl.appendChild(EditbtnEl);
  divBtnEl.appendChild(soatibtnEl);
  divBtnEl.appendChild(DeleteibtnEl);
  divEl.appendChild(divBtnEl);




  taskEl.prepend(divEl);

  inputEl.value = "";



  btnCompleteEl.addEventListener("click", () => {
    pEl.classList.toggle("active")
  })



  DeleteibtnEl.addEventListener("click", () => {
    let agrees = confirm("uchirishish");

    if (agrees) {
      divEl.remove()
    }

  })

});




allDeleteEl.addEventListener("click", () => {
  let con = confirm("Hammasini o'chirishga rozimisiz!");
  if (con) {
    taskEl.innerHTML = "";
  }
});
