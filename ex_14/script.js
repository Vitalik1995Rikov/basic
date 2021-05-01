// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

function ask (question, yes, no) {
  return (confirm (question)) ? yes() : no();
}

ask(
  'Согласен?',
  () => { return alert('да')},
  () => { return alert('нет')}
);