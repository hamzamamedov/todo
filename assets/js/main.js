document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#new-task");
  const form = document.querySelector("#todo-form");
  const todoList = document.querySelector("#todo-list");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(input.value);
    input.value = "";
  });

  function addTask(task) {
    if (task.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = task;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(li);
    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
});

// const send = document.querySelector("#send");
// const uname = document.querySelector("#name");
// const password = document.querySelector("#password");
// const error = document.querySelector("#error");
// const tbody = document.querySelector("#tbody");

// send.addEventListener("click", () => {
//   if (uname.value.trim() == "" || password.value.trim() == "") {
//     error.innerHTML = "Xanani bos saxlamayin !";
//     error.classList.add("error");
//   } else {
//     if (password.value.length < 8) {
//       error.innerHTML = "Sifre 8-den boyuk olmalidi !!";
//       error.classList.add("error");
//     } else {
//       if (password.value.includes("@")) {
//         const data = {
//           username: uname.value,
//           userpassword: password.value,
//         };
//         tbody.innerHTML += `
//         <tr>
//             <td>${data.username}</td>
//             <td>${data.userpassword}</td>
//         </tr>

//         `;
//         uname.value = "";
//         password.value = "";
//         error.innerHTML = "";
//         error.classList.remove("error");
//       } else {
//         error.innerHTML = "Sifrede @ simvolu yoxdur !!";
//         error.classList.add("error");
//       }
//     }
//   }
// });
