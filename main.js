document.querySelector('.addTask').onclick = function (){
	if (document.querySelector('input').value.length == 0) {
		alert('Please Enter a Task');
	}
	else {
		const userInput = document.querySelector('input').value;

		document.querySelector('.tasks').innerHTML += `

		<div class="task">
		
		<span ="class-name">
		${userInput}
		</span>

		<button class="delete"><i class="fas fa-trash-alt"></i></button>

		</div>

		`;

		var current_tasks = document.querySelectorAll('.delete');

		for (var i = 0; i < current_tasks.length; i++) {
			current_tasks[i].onclick = function (){
				this.parentNode.remove();
			};
		}

		var tasks = document.querySelectorAll('.task');
		for (i = 0; i < tasks.length; i++) {
			tasks[i].onclick = function (){
				this.classList.toggle('completed');
			};
		}

		document.querySelector('input').value = '';

		document.querySelector('.clear').addEventListener('click', function (){
			document.querySelector('.tasks').innerHTML = '<div class="task"> </div>';
		});

		document.querySelector('.count').textContent = `You have ${document.querySelectorAll('.task')
			.length} pending task'(s)`;
	}
};
