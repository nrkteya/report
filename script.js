"use strict";

const mokuji      = document.getElementById("mokuji"     );
const mokuji_span = document.getElementById("mokuji_span");
const list_one    = document.getElementById("list_one"   );
const list_two    = document.getElementById("list_two"   );
const list_three  = document.getElementById("list_three" );

mokuji.addEventListener("click", () => {
	if (
		list_one  .style.display === "none" &&
		list_two  .style.display === "none" &&
		list_three.style.display === "none"
	) {
		list_one   .style.display = "list-item";
		list_two   .style.display = "list-item";
		list_three .style.display = "list-item";
		mokuji_span.innerText     = "<hide>"   ;
	} else {
		list_one  .style.display = "none"  ;
		list_two  .style.display = "none"  ;
		list_three.style.display = "none"  ;
		mokuji_span.innerText    = "<show>";
	}
});
